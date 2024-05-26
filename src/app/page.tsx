const mockUrl = [
  "https://utfs.io/f/0e658cc6-fa7d-4450-9466-0f453b5d8df8-waepav.jpg",
  "https://utfs.io/f/608ee1dc-3f96-4c63-b8e7-494336f4531a-gct86v.jpg",
  "https://utfs.io/f/bd54c9c2-dea8-488e-aa63-343c0beff32b-1tinq.jpg",
  "https://utfs.io/f/65ae7e18-aa5f-4280-939c-96d23bed9cd9-mqemyv.jpg",
];

const mockImage = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImage, ...mockImage].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
