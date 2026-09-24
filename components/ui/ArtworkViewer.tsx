"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { ArtworkGridItem } from "@/lib/catalog";

const ZOOM_LEVELS = [1, 2, 3] as const;
type ZoomLevel = (typeof ZOOM_LEVELS)[number];

type ArtworkViewerContextValue = {
  open: (slug: string) => void;
};

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  scrollLeft: number;
  scrollTop: number;
};

const ArtworkViewerContext = createContext<ArtworkViewerContextValue | null>(
  null,
);

function useArtworkViewer() {
  const value = useContext(ArtworkViewerContext);
  if (!value) {
    throw new Error("ArtworkViewerTrigger must be used inside ArtworkViewer");
  }
  return value;
}

function centerStage(stage: HTMLDivElement) {
  stage.scrollTo({
    left: Math.max(0, (stage.scrollWidth - stage.clientWidth) / 2),
    top: Math.max(0, (stage.scrollHeight - stage.clientHeight) / 2),
  });
}

export function ArtworkViewer({
  items,
  children,
}: {
  items: readonly ArtworkGridItem[];
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [zoom, setZoom] = useState<ZoomLevel>(1);
  const [dragging, setDragging] = useState(false);

  const index = useMemo(() => {
    if (!openSlug) return -1;
    return items.findIndex((item) => item.slug === openSlug);
  }, [items, openSlug]);

  const current = index >= 0 ? items[index] : null;
  const hasNeighbors = items.length > 1;

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const open = useCallback((slug: string) => {
    setOpenSlug(slug);
    setZoom(1);
  }, []);

  const goRelative = useCallback(
    (delta: number) => {
      if (items.length < 2 || index < 0) return;
      const nextIndex = (index + delta + items.length) % items.length;
      setOpenSlug(items[nextIndex].slug);
      setZoom(1);
    },
    [index, items],
  );

  const setZoomLevel = useCallback((next: ZoomLevel) => {
    setZoom(next);
  }, []);

  const zoomIn = useCallback(() => {
    setZoom((currentZoom) => {
      const next = ZOOM_LEVELS.find((level) => level > currentZoom);
      return next ?? currentZoom;
    });
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((currentZoom) => {
      const previous = [...ZOOM_LEVELS]
        .reverse()
        .find((level) => level < currentZoom);
      return previous ?? currentZoom;
    });
  }, []);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    if (zoom === 1) {
      stage.scrollTo({ left: 0, top: 0 });
      return;
    }

    // Wait for the zoomed layout size to apply, then center.
    requestAnimationFrame(() => {
      centerStage(stage);
    });
  }, [zoom, openSlug]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (openSlug && current) {
      if (!dialog.open) {
        dialog.showModal();
      }
      return;
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [current, openSlug]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      setOpenSlug(null);
      setZoom(1);
      setDragging(false);
      dragRef.current = null;
    };

    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const onDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      close();
    }
  };

  const onDialogKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (!current) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goRelative(-1);
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goRelative(1);
      return;
    }
    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      zoomIn();
      return;
    }
    if (event.key === "-" || event.key === "_") {
      event.preventDefault();
      zoomOut();
      return;
    }
    if (event.key === "0") {
      event.preventDefault();
      setZoomLevel(1);
    }
  };

  const onImageDoubleClick = () => {
    setZoomLevel(zoom === 1 ? 2 : 1);
  };

  const onStagePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1 || event.button !== 0) return;
    const stage = stageRef.current;
    if (!stage) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: stage.scrollLeft,
      scrollTop: stage.scrollTop,
    };
    stage.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const onStagePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const stage = stageRef.current;
    if (!drag || !stage || drag.pointerId !== event.pointerId) return;

    stage.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
    stage.scrollTop = drag.scrollTop - (event.clientY - drag.startY);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    setDragging(false);
    if (stageRef.current?.hasPointerCapture(event.pointerId)) {
      stageRef.current.releasePointerCapture(event.pointerId);
    }
  };

  const imageSrc = current?.imageFullUrl ?? current?.imageUrl ?? null;
  const metaParts = [
    current?.medium,
    current?.year ? String(current.year) : null,
    current?.dimensions,
  ].filter(Boolean);

  const contextValue = useMemo(() => ({ open }), [open]);

  return (
    <ArtworkViewerContext.Provider value={contextValue}>
      {children}
      <dialog
        ref={dialogRef}
        className="oca-artwork-viewer fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 text-[color:var(--color-ink)] open:flex open:items-stretch open:justify-center"
        aria-labelledby={titleId}
        aria-describedby={current?.description ? descriptionId : undefined}
        onClick={onDialogClick}
        onKeyDown={onDialogKeyDown}
      >
        {current ? (
          <div className="relative flex h-full w-full flex-col bg-[color:var(--color-paper)] md:m-4 md:h-[calc(100%-2rem)] md:w-[calc(100%-2rem)] md:border-[3px] md:border-[color:var(--color-ink)] md:shadow-[8px_8px_0_var(--color-ink)]">
            <div className="flex flex-wrap items-center gap-2 border-b-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-oat)] px-3 py-2 md:px-4">
              <Button
                variant="secondary"
                className="min-h-11 min-w-11"
                onClick={close}
              >
                Close
              </Button>
              <div className="ml-auto flex flex-wrap items-center gap-2">
                <Button
                  variant="secondary"
                  className="min-h-11 min-w-11 px-3"
                  onClick={zoomOut}
                  disabled={zoom === 1}
                  aria-label="Zoom out"
                >
                  −
                </Button>
                <Button
                  variant="secondary"
                  className="min-h-11 px-3"
                  onClick={() => setZoomLevel(1)}
                  disabled={zoom === 1}
                  aria-label="Reset zoom"
                >
                  Fit
                </Button>
                <Button
                  variant="secondary"
                  className="min-h-11 min-w-11 px-3"
                  onClick={zoomIn}
                  disabled={zoom === 3}
                  aria-label="Zoom in"
                >
                  +
                </Button>
                {hasNeighbors ? (
                  <>
                    <Button
                      variant="secondary"
                      className="min-h-11 px-3"
                      onClick={() => goRelative(-1)}
                      aria-label="Previous artwork"
                    >
                      Previous
                    </Button>
                    <Button
                      variant="secondary"
                      className="min-h-11 px-3"
                      onClick={() => goRelative(1)}
                      aria-label="Next artwork"
                    >
                      Next
                    </Button>
                  </>
                ) : null}
              </div>
            </div>

            <div
              ref={stageRef}
              className={clsx(
                "relative min-h-0 flex-1 bg-[color:var(--color-cocoa)] select-none",
                zoom > 1 ? "overflow-auto touch-none" : "overflow-hidden",
                zoom > 1 && (dragging ? "cursor-grabbing" : "cursor-grab"),
              )}
              onPointerDown={onStagePointerDown}
              onPointerMove={onStagePointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              <div
                className={clsx(
                  "flex h-full w-full items-center justify-center p-3 md:p-6",
                  zoom > 1 && "min-h-full min-w-full",
                )}
                style={
                  zoom > 1
                    ? {
                        width: `${zoom * 100}%`,
                        height: `${zoom * 100}%`,
                        minWidth: `${zoom * 100}%`,
                        minHeight: `${zoom * 100}%`,
                      }
                    : undefined
                }
              >
                {imageSrc ? (
                  <button
                    type="button"
                    className={clsx(
                      "relative h-full w-full max-h-full max-w-full border-0 bg-transparent p-0",
                      zoom > 1
                        ? dragging
                          ? "cursor-grabbing"
                          : "cursor-grab"
                        : "cursor-zoom-in",
                    )}
                    onDoubleClick={onImageDoubleClick}
                    aria-label={
                      zoom === 1
                        ? `Zoom in on ${current.title}`
                        : `Fit ${current.title} to screen`
                    }
                  >
                    <Image
                      src={imageSrc}
                      alt={current.imageAlt}
                      fill
                      sizes="100vw"
                      className="pointer-events-none object-contain"
                      draggable={false}
                      priority
                    />
                  </button>
                ) : (
                  <p className="text-[color:var(--color-paper)]">
                    No image for this work.
                  </p>
                )}
              </div>
            </div>

            <div className="border-t-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-paper)] px-4 py-4 md:px-6">
              <h2 id={titleId} className="text-h4">
                {current.title}
              </h2>
              <p className="mt-1 text-sm opacity-90">
                {current.artistName && current.artistSlug ? (
                  <Link
                    href={`/artists/${current.artistSlug}`}
                    className="font-semibold underline decoration-[0.12em] underline-offset-[0.18em]"
                  >
                    {current.artistName}
                  </Link>
                ) : current.artistName ? (
                  current.artistName
                ) : null}
                {metaParts.length > 0 ? (
                  <>
                    {current.artistName ? " · " : null}
                    {metaParts.join(" · ")}
                  </>
                ) : null}
              </p>
              {current.description ? (
                <p id={descriptionId} className="mt-2 max-w-3xl opacity-90">
                  {current.description}
                </p>
              ) : null}
              {current.purchaseUrl ? (
                <p className="mt-3">
                  <a
                    href={current.purchaseUrl}
                    className="text-sm font-semibold underline decoration-[0.12em] underline-offset-[0.18em]"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Available from the artist
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </ArtworkViewerContext.Provider>
  );
}

export function ArtworkViewerTrigger({
  artwork,
  ratio = "landscape",
  className,
  priority = false,
  embedded = false,
  label,
}: {
  artwork: ArtworkGridItem;
  ratio?: "portrait" | "landscape" | "square" | "wide";
  className?: string;
  priority?: boolean;
  embedded?: boolean;
  label?: string;
}) {
  const { open } = useArtworkViewer();

  return (
    <button
      type="button"
      className={clsx(
        "oca-artwork-trigger block min-w-0 w-full border-0 bg-transparent p-0 text-left",
        className,
      )}
      onClick={() => open(artwork.slug)}
      aria-label={`View ${artwork.title}`}
    >
      <MediaFrame
        src={artwork.imageUrl ?? undefined}
        alt={artwork.imageAlt}
        tone={artwork.tone}
        ratio={ratio}
        label={label ?? artwork.title}
        priority={priority}
        embedded={embedded}
      />
    </button>
  );
}
