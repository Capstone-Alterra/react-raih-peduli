import fb from "@/assets/logos/fb.svg";
import twitter from "@/assets/logos/twitter.svg";
import linkedln from "@/assets/logos/linkedln.svg";
import ig from "@/assets/logos/ig.svg";
import x from "@/assets/logos/x.svg";
import playstore from "@/assets/logos/playstore.svg";
import appstore from "@/assets/logos/appstore.svg";
import LogoRaihPeduli from "@/assets/logos/raihpeduli.svg";

export default function FooterLandingPage() {
  return (
    <footer
      className="w-full justify-between items-center"
      style={{
        height: "463px",
        backgroundColor: "#E5E9F4",
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
            marginLeft: "50px",
          }}
        >
          {/* Komponen "RAIH PEDULI" */}
          <div className="flex" style={{ gap: "20px", paddingBottom: "10px" }}>
            <img
              style={{ width: "50px" }}
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
            marginRight: "40px",
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
      <div
        style={{
          width: "full",
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
    </footer>
  );
}
