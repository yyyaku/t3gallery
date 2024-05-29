import FullPageImageView from "~/app/components/full-image.page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <FullPageImageView id={photoId}></FullPageImageView>
    </div>
  );
}
