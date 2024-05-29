import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: string }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  const image = await getImage(idAsNumber);
  return <img src={image.url} className="w-96" />;
}
