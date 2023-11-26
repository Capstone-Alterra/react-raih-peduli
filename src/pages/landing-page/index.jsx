/* eslint-disable no-unused-vars */
import React from "react";
import backgroundImage from "@/assets/pictures/background-lp.svg";
import pict1 from "@/assets/pictures/pict1.svg";
import pict2 from "@/assets/pictures/pict2.svg";
import pict3 from "@/assets/pictures/pict3.svg";
import pict4 from "@/assets/pictures/pict4.svg";
import pict5 from "@/assets/pictures/pict5.svg";
import relawan from "@/assets/pictures/relawan.svg";
import mitra from "@/assets/pictures/mitra.svg";
import kegiatan from "@/assets/pictures/kegiatan.svg";
import sedekah from "@/assets/pictures/sedekah.svg";
import act from "@/assets/pictures/act.svg";
import kitabisa from "@/assets/pictures/kitabisa.svg";
import lindungi from "@/assets/pictures/lindungi.svg";
import detik from "@/assets/pictures/detik.svg";
import kompas from "@/assets/pictures/kompas.svg";
import tempo from "@/assets/pictures/tempo.svg";
import LayoutLandingPage from "./components/layout-landingpage";
import { Content1, Content2 } from "./components/content";

export default function LandingPage() {
  return (
    <LayoutLandingPage>
      <div
        className="w-full flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "900px",
          opacity: "90%",
        }}
      >
        <h1
          className="text-white font-bold"
          style={{
            fontSize: "70px",
            textShadow:
              "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
          }}
        >
          Wujudkan Niat Baikmu
        </h1>
      </div>

      <div className="w-full h-full justify-center items-center relative ">
        <div
          className="w-[600px] flex absolute"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            padding: "50px",
            borderRadius: "15px",
            backgroundColor: "white",
            marginTop: "-55px",
          }}
        >
          <a className="pr-[100px]" href="">
            <img src={relawan} />
          </a>
          <a className="pr-[100px]" href="">
            <img src={mitra} />
          </a>
          <a href="">
            <img src={kegiatan} />
          </a>
        </div>

        {/* konten */}
        <Content1
          id="tentang-kami"
          image={pict1}
          title="Tentang Kami"
          content="Kami adalah komunitas yang tumbuh dengan semangat untuk memberdayakan perubahan positif. 
          Di Raih Peduli, kami percaya bahwa kepedulian adalah kunci untuk meraih masyarakat yang lebih baik. 
          Sejak awal, misi kami adalah menyinari dunia dengan aksi sosial yang bermakna. Setiap langkah yang kami ambil, 
          setiap donasi yang kami terima, dan setiap sukarelawan yang bergabung membentuk fondasi kami untuk meraih lebih 
          banyak lagi. Bersama, mari kita wujudkan dampak yang berarti dan raih kebaikan bersama Raih Peduli."
        />

        <Content2
          id="donasi"
          title="Kami Ada untuk Anda"
          subtitle="Kenyamanan, kemudahan, dan keamanan Anda adalah prioritas utama kami. Apa yang dapat Anda lakukan di platform kami?"
          points={[
            "User dapat berdonasi menggunakan beberapa Metode Pembayaran",
            "User juga dapat mengajukan Program Penggalangan Dana",
          ]}
          text="Raih Peduli memungkinkan Anda untuk terlibat dalam donasi dengan cara yang mudah dan 
          aman serta dapat berkontribusi langsing dalam kegiatan sosial. 
          Kami berkomitmen untuk menyediakan sarana yang memungkinkan Anda berperan dalam perubahan yang diinginkan."
          image={pict2}
        />

        <Content1
          id=""
          image={pict3}
          title="Apa Itu Penggalangan dana?"
          content=" Penggalangan Dana fitur yang bertujuan untuk mengumpulkan
        sumbangan dana, barang, atau bantuan finansial untuk mendukung
        sebuah tujuan atau inisiatif tertentu. Ini memungkinkan anda untuk
        bersatu dalam memberikan kontribusi dalam rangka membantu berbagai
        program kemanusiaan atau sosial."
        />

        <Content2
          id="relawan"
          title="Bagaimana Lowongan Relawan Bekerja?"
          subtitle="Lowongan relawan memberikan kesempatan bagi anda untuk
        berpartisipasi secara langsung dalam kegiatan-kegiatan sosial
        seperti peduli lingkungan, pendidikan, kesehatan, dll. Apa yang
        dapat anda lakukan di platform kami?"
          points={[
            "User dapat mendaftar sebagai Relawan Sosial",
            "User juga dapat mengajukan Program Lowongan Relawan",
          ]}
          text="Mari terlibat secara sukarela dalam berbagai program atau kegiatan
        sosial guna memberikan kontribusi positif bagi sekitar."
          image={pict4}
        />

        <Content1
          id="berita"
          image={pict5}
          title="Berita"
          content="Raih Peduli menyajikan berbagai infromasi sosial terkini yang
        terjadi di sekitar kita, baik secara lokal, nasional, maupun
        internasional."                                                                                           
       
        content1="Di sini, kami berkomitmen untuk menyajikan berita yang akurat,
        informatif, dan relevan. Kami menyediakan informasi terkini dalam
        berbagai topik sosial seperti bencana alam, kesehatan, pendidikan,
        dan berbagai macam sajian berita lainnya."
        />

        <div
          className="w-full justify-center items-center"
          style={{ height: "543px", paddingTop:"40px" }}
        >
          <h1
            className="text-[#293066]"
            style={{
              fontSize: "44px",
              fontFamily: "Helvetica",
              padding: "0px, 20px, 0px, 20px",
              fontWeight: "700",
              textAlign: "center",
              lineHeight: "67.5px",
            }}
          >
            Mitra Kami
          </h1>
          <p
            className=""
            style={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "32px",
              fontFamily: "Helvetica",
              textAlign: "center",
            }}
          >
            Kami bekerjasama dengan berbagai organisasi dan komunitas dalam
            mengelola Raih Peduli.
          </p>
          <div className="w-full gap-[40px] pt-20 pb-20 flex justify-center items-center">
            <img className="w-[180px]" src={sedekah} />
            <img className="w-[90px]" src={act} />
            <img className="w-[180px]"src={kitabisa} />
            <img className="w-[180px]"src={lindungi} />
          </div>

          <div className="w-full gap-[40px] flex justify-center items-center">
            <img className="w-[180px]"src={detik} />
            <img className="w-[170px]"src={kompas} />
            <img className="w-[150px]" src={tempo} />
          </div>
        </div>
      </div>
    </LayoutLandingPage>
  );
}
