import React from "react";

function IsiAbout() {
  return (
    <div>
      <div>
        <img
          className=""
          style={{ width: "100%" }}
          src="src/assets/2.jpg"
          alt=""
        />
      </div>

      <div className="text-center m-3">
        <h4>About</h4>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12" style={{ marginRight: "40px" }}>
            <img src="src/assets/asean.png" className="img-connect" alt="" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h1>Asean Youth Forum</h1>
            <h5 className="mt-4 mb-4">
              Asean Youth Forum (AYF) adalah sebuah gerakan yang mewakili dan
              memperjuangkan kaum muda di ASEAN untuk menyuarakan keprihatinan
              dan strategi mereka untuk mencapai ASEAN yang lebih baik. AYF
              telah menjadi platform pemuda di ASEAN untuk menyuarakan suara
              mereka dan mengklaim hak-hak mereka untuk komunitas regional yang
              berkelanjutan, inklusif, berpusat pada orang, dan digerakkan oleh
              pemuda. Jaringan ini bertujuan untuk melembagakan dan mendirikan
              cabang nasionalnya untuk memfokuskan keterlibatan pada isu-isu
              lokal yang penting dan tepat waktu yang mempengaruhi kaum muda,
              dan mengkonsolidasikan proposal kebijakan dan agenda untuk
              diajukan ke kantor-kantor ASEAN yang relevan.
            </h5>
          </div>
        </div>
      </div>

      <div>
        <img
          className=""
          style={{ width: "100%" }}
          src="src/assets/5.png"
          alt=""
        />
      </div>

      <h5 className="text-center mt-4">
        Untuk menciptakan dunia di mana pemuda menunjukkan minat yang tinggi di
        ASEAN melalui kegiatan kami yang Memberdayakan Pemuda, Melibatkan &
        Mendidik Komunitas untuk menerapkan ide-ide yang memungkinkan Perubahan
        Berkelanjutan yang Positif.{" "}
      </h5>

      <style>
        {`
          @media (max-width: 768px) {
            .col-md-5 {
              margin-right: 0;
            }
            .col-md-6 {
              margin-top: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default IsiAbout;
