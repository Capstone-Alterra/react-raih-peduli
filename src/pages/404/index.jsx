import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import image404 from "@/assets/logos/404-image.png";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img
          src={image404}
          alt="404 Image"
          className="h-80 w-80 mx-auto my-auto"
        />
      </div>
      <div className="text-center mt-4 font-bold">
        Maaf, halaman yang Anda cari tidak ditemukan
      </div>
      <Button
        id="btn-back-to-dashboard"
        size="sm"
        className="bg-[#293066] hover:bg-[#293066]/80 mt-4"
      >
        <Link to="/dashboard">Kembali Ke Dashboard</Link>
      </Button>
    </div>
  );
};

export default Index;
