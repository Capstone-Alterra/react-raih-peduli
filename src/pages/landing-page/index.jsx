/* eslint-disable no-unused-vars */
import React from "react";
import backgroundImage from "@/assets/pictures/background-lp.svg";
import pict1 from "@/assets/pictures/pict1.svg";
import pict2 from "@/assets/pictures/pict2.svg";
import checklist from "@/assets/pictures/checklist.svg";
import pict3 from "@/assets/pictures/pict3.svg";
import pict4 from "@/assets/pictures/pict4.svg";
import pict5 from "@/assets/pictures/pict5.svg";
import LogoRaihPeduli from "@/assets/logos/raihpeduli.svg";
import { Button } from "@/components/ui/button";
import fb from "@/assets/logos/fb.svg";
import twitter from "@/assets/logos/twitter.svg";
import linkedln from "@/assets/logos/linkedln.svg";
import ig from "@/assets/logos/ig.svg";
import x from "@/assets/logos/x.svg";
import playstore from "@/assets/logos/playstore.svg";
import appstore from "@/assets/logos/appstore.svg";
import relawan from "@/assets/pictures/relawan.svg";
import mitra from "@/assets/pictures/mitra.svg";
import kegiatan from "@/assets/pictures/kegiatan.svg";
import { useNavigate } from "react-router-dom";
import sedekah from "@/assets/pictures/sedekah.svg";
import act from "@/assets/pictures/act.svg";
import kitabisa from "@/assets/pictures/kitabisa.svg";
import lindungi from "@/assets/pictures/lindungi.svg";
import detik from "@/assets/pictures/detik.svg";
import kompas from "@/assets/pictures/kompas.svg";
import tempo from "@/assets/pictures/tempo.svg";

export default function LandingPage() {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      {/* navbar */}
      <nav
        className="w-full bg-white"
        style={{
          height: "80px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <div
          className="flex"
          style={{ margin: "20px 90px", width: "auto", height: "40px" }}
        >
          <a href="/">
            <div className="flex" style={{ alignItems: "center" }}>
              <img src={LogoRaihPeduli} style={{ marginRight: "10px" }} />
              <p
                className="text-[#293066]"
                style={{ fontFamily: "Helvetica", fontSize: "27px" }}
              >
                <span className="font-bold">RAIH</span> PEDULI
              </p>
            </div>
          </a>

          <div className="flex" style={{ flex: 1, justifyContent: "center" }}>
            <a
              href="#tentang-kami"
              className="text-[#293066]"
              style={{
                fontFamily: "Helvetica",
                fontSize: "16px",
                paddingTop: "10px",
                margin: "0 10px",
              }}
            >
              TENTANG KAMI
            </a>
            <a
              href="#donasi"
              className="text-[#293066]"
              style={{
                fontFamily: "Helvetica",
                fontSize: "16px",
                paddingTop: "10px",
                margin: "0 10px",
              }}
            >
              DONASI
            </a>
            <a
              href="#relawan"
              className="text-[#293066]"
              style={{
                fontFamily: "Helvetica",
                fontSize: "16px",
                paddingTop: "10px",
                margin: "0 10px",
              }}
            >
              RELAWAN
            </a>
            <a
              href="#berita"
              className="text-[#293066]"
              style={{
                fontFamily: "Helvetica",
                fontSize: "16px",
                paddingTop: "10px",
                margin: "0 10px",
              }}
            >
              BERITA
            </a>
          </div>

          <div>
            <Button
              id="toLogin"
              className="bg-[#293066] text-white w-40"
              onClick={handleToLogin}
            >
              Masuk
            </Button>
          </div>
        </div>
      </nav>

      {/* jumbotron */}
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
            fontSize: "80px",
            textShadow:
              "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
          }}
        >
          Wujudkan Niat Baikmu
        </h1>
      </div>

      <div className="w-full h-[3824px] justify-center items-center relative ">
        {" "}
        {/* Change to relative positioning */}
        <div
          className="w-[600px] flex absolute"
          style={{
            left: "50%", // Center horizontally
            transform: "translateX(-50%)", // Center horizontally
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
        <div
          id="tentang-kami"
          className="w-full flex bg-slate-100 justify-center items-center "
          style={{
            height: "645px",
            padding: "20px 0px 20px 0px",
          }}
        >
          <img src={pict1} style={{ maxWidth: "50%", marginRight: "50px" }} />
          <div style={{ height: "438px", width: "600px" }}>
            <h1
              className="text-[#293066]"
              style={{
                paddingTop: "20px",
                fontSize: "54px",
                fontFamily: "Helvetica",
                fontWeight: "700",
                lineHeight: "62px",
                textAlign: "left",
                paddingBottom: "16px",
              }}
            >
              Tentang Kami
            </h1>
            <p
              style={{
                height: "320px",
                fontSize: "24px",
                fontFamily: "Helvetica",
                fontWeight: "400",
                lineHeight: "32px",
                letterSpacing: "0em",
                textAlign: "justify",
              }}
            >
              Kami adalah komunitas yang tumbuh dengan semangat untuk
              memberdayakan perubahan positif. Di Raih Peduli, kami percaya
              bahwa kepedulian adalah kunci untuk meraih masyarakat yang lebih
              baik. Sejak awal, misi kami adalah menyinari dunia dengan aksi
              sosial yang bermakna. Setiap langkah yang kami ambil, setiap
              donasi yang kami terima, dan setiap sukarelawan yang bergabung
              membentuk fondasi kami untuk meraih lebih banyak lagi. Bersama,
              mari kita wujudkan dampak yang berarti dan raih kebaikan bersama
              Raih Peduli.
            </p>
          </div>
        </div>
        <div
          className="w-full flex bg-slate-100e justify-center items-center"
          style={{
            height: "584px",
            padding: "20px 0px 20px 0px",
          }}
        >
          <div style={{ width: "600px", height: "544px" }}>
            <h1
              className="text-[#293066]"
              style={{
                width: "600px",
                height: "68px",
                fontSize: "54px",
                fontFamily: "Helvetica",
                fontWeight: "700",
                lineHeight: "67.5px",
                letterSpacing: "-1%",
              }}
            >
              Kami Ada untuk Anda
            </h1>
            <p
              style={{
                paddingTop: "16px",
                fontSize: "24px",
                fontFamily: "Helvetica",
                fontWeight: "400",
                lineHeight: "32px",
                textAlign: "justify",
              }}
            >
              Kenyamanan, kemudahan, dan keamanan Anda adalah prioritas utama
              kami. Apa yang dapat Anda lakukan di platform kami?
            </p>
            <div className="flex items-center" style={{ paddingTop: "10px" }}>
              <img
                src={checklist}
                alt="checklist"
                style={{ paddingRight: "10px" }}
              />
              <span
                className="font-bold"
                style={{
                  fontSize: "20px",
                  fontFamily: "Helvetica",
                  lineHeight: "30px",
                  fontWeight: "700",
                }}
              >
                User dapat berdonasi menggunakan beberapa Metode Pembayaran
              </span>
            </div>
            <div
              className="flex items-center"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              <img
                src={checklist}
                alt="checklist"
                style={{ paddingRight: "10px" }}
              />
              <span
                className="font-bold"
                style={{
                  fontSize: "20px",
                  fontFamily: "Helvetica",
                  lineHeight: "30px",
                  fontWeight: "700",
                }}
              >
                User juga dapat mengajukan Program Penggalangan Dana
              </span>
            </div>
            <p
              className="flex items-center"
              style={{
                fontSize: "24px",
                fontFamily: "Helvetica",
                fontWeight: "400",
                lineHeight: "32px",
                textAlign: "justify",
              }}
            >
              Raih Peduli memungkinkan Anda untuk terlibat dalam donasi dengan
              cara yang mudah dan aman serta dapat berkontribusi langsing dalam
              kegiatan sosial. Kami berkomitmen untuk menyediakan sarana yang
              memungkinkan Anda berperan dalam perubahan yang diinginkan.
            </p>
          </div>
          <img
            src={pict2}
            alt="pict2"
            style={{
              paddingBottom: "70px",
              maxWidth: "50%",
              marginLeft: "50px",
            }}
          />
        </div>
        <div
          id="donasi"
          className="w-full flex bg-slate-100 justify-center items-center "
          style={{
            height: "610px",
            padding: "20px 0px 20px 0px",
          }}
        >
          <img src={pict3} style={{ maxWidth: "50%", marginRight: "50px" }} />
          <div style={{ height: "356px", width: "600px" }}>
            <h1
              className="text-[#293066]"
              style={{
                paddingTop: "20px",
                fontSize: "54px",
                fontFamily: "Helvetica",
                fontWeight: "700",
                lineHeight: "74px",
                textAlign: "left",
                paddingBottom: "16px",
                letterSpacing: "-1%",
              }}
            >
              Apa Itu Penggalangan dana?
            </h1>
            <p
              style={{
                height: "192px",
                fontSize: "24px",
                fontFamily: "Helvetica",
                fontWeight: "400",
                lineHeight: "32px",
                textAlign: "justify",
              }}
            >
              Penggalangan Dana fitur yang bertujuan untuk mengumpulkan
              sumbangan dana, barang, atau bantuan finansial untuk mendukung
              sebuah tujuan atau inisiatif tertentu. Ini memungkinkan anda untuk
              bersatu dalam memberikan kontribusi dalam rangka membantu berbagai
              program kemanusiaan atau sosial.
            </p>
          </div>
        </div>
        <div
          className="w-full flex bg-white justify-center items-center"
          style={{
            height: "602px",
            padding: "20px 0px 20px 0px",
          }}
        >
          <div style={{ width: "643px", height: "562px" }}>
            <h1
              id="relawan"
              className="text-[#293066]"
              style={{
                width: "643px",
                height: "136px",
                fontSize: "54px",
                fontFamily: "Helvetica",
                fontWeight: "700",
                lineHeight: "67.5px",
                letterSpacing: "-1%",
              }}
            >
              Bagaimana Lowongan Relawan Bekerja?
            </h1>
            <p
              style={{
                paddingTop: "16px",
                fontSize: "24px",
                fontFamily: "Helvetica",
                fontWeight: "400",
                lineHeight: "32px",
                textAlign: "justify",
              }}
            >
              Lowongan relawan memberikan kesempatan bagi anda untuk
              berpartisipasi secara langsung dalam kegiatan-kegiatan sosial
              seperti peduli lingkungan, pendidikan, kesehatan, dll. Apa yang
              dapat anda lakukan di platform kami?
            </p>
            <div className="flex items-center" style={{ paddingTop: "10px" }}>
              <img
                src={checklist}
                alt="checklist"
                style={{ paddingRight: "10px" }}
              />
              <span
                className="font-bold"
                style={{
                  fontSize: "20px",
                  fontFamily: "Helvetica",
                  lineHeight: "30px",
                  fontWeight: "700",
                }}
              >
                User dapat mendaftar sebagai Relawan Sosial
              </span>
            </div>
            <div
              className="flex items-center"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              <img
                src={checklist}
                alt="checklist"
                style={{ paddingRight: "10px" }}
              />
              <span
                className="font-bold"
                style={{
                  fontSize: "20px",
                  fontFamily: "Helvetica",
                  lineHeight: "30px",
                  fontWeight: "700",
                }}
              >
                User juga dapat mengajukan Program Lowongan Relawan
              </span>
            </div>
            <p
              className="flex items-center"
              style={{
                fontSize: "24px",
                fontFamily: "Helvetica",
                fontWeight: "400",
                lineHeight: "32px",
                textAlign: "justify",
              }}
            >
              Mari terlibat secara sukarela dalam berbagai program atau kegiatan
              sosial guna memberikan kontribusi positif bagi sekitar.
            </p>
          </div>
          <img
            src={pict4}
            alt="pict4"
            style={{
              paddingBottom: "100px",
              maxWidth: "50%",
              marginLeft: "50px",
            }}
          />
        </div>
        <div
          id="berita"
          className="w-full flex bg-slate-100 justify-center items-center "
          style={{
            height: "640px",
            padding: "20px 0px 20px 0px",
          }}
        >
          <img src={pict5} style={{ maxWidth: "50%", marginRight: "50px" }} />
          <div style={{ height: "364px", width: "600px" }}>
            <h1
              className="text-[#293066]"
              style={{
                fontSize: "54px",
                fontFamily: "Helvetica",
                fontWeight: "700",
                lineHeight: "74px",
                textAlign: "left",
                paddingBottom: "16px",
                letterSpacing: "-1%",
              }}
            >
              Berita
            </h1>
            <p
              style={{
                height: "192px",
                fontSize: "24px",
                fontFamily: "Helvetica",
                fontWeight: "400",
                lineHeight: "32px",
                textAlign: "justify",
              }}
            >
              Raih Peduli menyajikan berbagai infromasi sosial terkini yang
              terjadi di sekitar kita, baik secara lokal, nasional, maupun
              internasional.
              <br />
              <br />
              Di sini, kami berkomitmen untuk menyajikan berita yang akurat,
              informatif, dan relevan. Kami menyediakan informasi terkini dalam
              berbagai topik sosial seperti bencana alam, kesehatan, pendidikan,
              dan berbagai macam sajian berita lainnya.
            </p>
          </div>
        </div>
        <div
          className="w-full justify-center items-center"
          style={{ height: "543px" }}
        >
          <h1
            className="text-[#293066]"
            style={{
              fontSize: "54px",
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
              fontSize: "24px",
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
            <img src={sedekah} />
            <img src={act} />
            <img src={kitabisa} />
            <img src={lindungi} />
          </div>

          <div className="w-full gap-[40px] flex justify-center items-center">
            <img src={detik} />
            <img src={kompas} />
            <img src={tempo} />
          </div>
        </div>
      </div>

      <footer
        className="w-full flex justify-between items-center"
        style={{
          height: "463px",
          backgroundColor: "#E5E9F4",
          padding: "20px 106px",
        }}
      >
        <div
          className="flex justify-center items-center"
          style={{ width: "100%", height: "100%", gap: "172px" }}
        >
          <div
            style={{
              width: "400px",
              height: "210px",
              justifyContent: "space-between",
            }}
          >
            {/* Komponen "RAIH PEDULI" */}
            <div
              className="flex"
              style={{ gap: "20px", paddingBottom: "10px" }}
            >
              <img
                style={{ width: "55px", height: "51.38px" }}
                src={LogoRaihPeduli}
                alt=""
              />
              <p
                className="text-[#293066]"
                style={{ fontSize: "27.71px", fontFamily: "Helvetica" }}
              >
                <span className="font-bold">RAIH</span> PEDULI
              </p>
            </div>

            {/* Info Kontak "RAIH PEDULI" */}
            <div style={{ gap: "8px" }}>
              <p
                style={{
                  paddingTop: "10px",
                  fontSize: "18px",
                  fontFamily: "Helvetica",
                  lineHeight: "17px",
                  letterSpacing: "0.2px",
                }}
              >
                Mempunyai Pertanyaan? Hubungi:
              </p>
              <p
                style={{
                  paddingTop: "10px",
                  fontSize: "13px",
                  fontFamily: "Century Gothic",
                  lineHeight: "17px",
                  letterSpacing: "0.2px",
                  fontWeight: "400",
                  color: "#293066",
                }}
              >
                03 111 666 144 <br />
                0317 1777015.
              </p>
              <p
                style={{
                  paddingTop: "10px",
                  fontWeight: "400",
                  fontSize: "18px",
                  fontFamily: "Helvetica",
                  lineHeight: "17px",
                  letterSpacing: "0.2px",
                }}
              >
                Alamat
              </p>
              <p
                style={{
                  paddingTop: "10px",
                  fontWeight: "400",
                  fontSize: "14px",
                  fontFamily: "Helvetica",
                  lineHeight: "15px",
                  color: "#293066",
                }}
              >
                Golden Tower lt.29 <br />
                Jl. Tarumanegara no.10 Pasar Minggu, Jakarta Selatan
              </p>
            </div>
          </div>

          {/* Customer Care */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "21px",
              width: "149px",
              height: "210px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontFamily: "Century Gothic",
                lineHeight: "24.5px",
                fontWeight: "400",
                width: "149px",
              }}
            >
              Customer Care
            </p>
            <a
              href=""
              id=""
              style={{
                fontSize: "13px",
                fontFamily: "Century Gothic",
                lineHeight: "15.94px",
                fontWeight: "400",
              }}
            >
              My Account
            </a>
            <a
              href=""
              id=""
              style={{
                fontSize: "13px",
                fontFamily: "Century Gothic",
                lineHeight: "15.94px",
                fontWeight: "400",
              }}
            >
              Track Your Order
            </a>
            <a
              href=""
              id=""
              style={{
                fontSize: "13px",
                fontFamily: "Century Gothic",
                lineHeight: "15.94px",
                fontWeight: "400",
              }}
            >
              Recently Viewed
            </a>
            <a
              href=""
              id=""
              style={{
                fontSize: "13px",
                fontFamily: "Century Gothic",
                lineHeight: "15.94px",
                fontWeight: "400",
              }}
            >
              Wishlist
            </a>
            <a
              href=""
              id=""
              style={{
                fontSize: "13px",
                fontFamily: "Century Gothic",
                lineHeight: "15.94px",
                fontWeight: "400",
              }}
            >
              Compare
            </a>
            <a
              href=""
              id=""
              style={{
                fontSize: "13px",
                fontFamily: "Century Gothic",
                lineHeight: "15.94px",
                fontWeight: "400",
              }}
            >
              Become a Vendor
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "233px",
              height: "210px",
            }}
          >
            <p
              style={{
                fontFamily: "Century Gothic",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "24.52px",
              }}
            >
              Ikuti Kami
            </p>
            <div
              style={{
                display: "flex",
                width: "195px",
                height: "24px",
                gap: "24px",
              }}
            >
              <a href="">
                <img src={fb} />
              </a>
              <a href="">
                <img src={twitter} />
              </a>
              <a href="">
                <img src={linkedln} />
              </a>
              <a href="">
                <img src={ig} />
              </a>
              <a href="">
                <img src={x} />
              </a>
            </div>
            <p
              style={{
                fontFamily: "Century Gothic",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "25px",
              }}
            >
              Download Aplikasi Kami
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a href="">
                <img src={playstore} />
              </a>
              <a href="">
                <img src={appstore} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div
        style={{
          height: "59px",
          backgroundColor: "#293066",
          padding: "21px 113px",
        }}
      >
        <p
          style={{
            fontFamily: "Century Gothic",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "17px",
            letterSpacing: "0.2px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          © 2021 Raih Peduli. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
