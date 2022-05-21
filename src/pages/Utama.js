import logo from "../assets/logo_kamo.png";
import who from "../assets/who.png";
import mudah from "../assets/easy.png";
import cepat from "../assets/cepat.png";
import murah from "../assets/money.png";
import fb from "../assets/fb.png";
import tw from "../assets/tw.png";
import mail from "../assets/mail.png";
import ig from "../assets/ig.png";
const Utama = () => {
  return (
    <>
      <section class="topbanner customBlue text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center">
              <img src={logo} className="img-fluid" alt="" />
            </div>
            <div class="col-md-6 justify-content-center align-middle d-flex align-items-center">
              <div class="jumbotron bg-transparent  text-center">
                <h1 class="display-5 fontmarker fw-bold">Mari Berkreasi</h1>
                <p class="lead">
                  Buatlah Hobi positif anda sekarang. Cooca adalah platform
                  daring yang berfokus pada Home Creation atau kuliner rumahan.
                  Banyak resep dan info terkait makanan dan cara pembuatanya.
                </p>

                <p class="lead">
                  <a class="btn btn-primary btn-lg" href="#" role="button">
                    Bergabung
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="tentang text-center mt-5">
        <div class="container">
          <h1 class="display-5 fontmarker fw-bold" style={{ color: "#7cb1ff" }}>
            Siapa Kami
          </h1>
          <div class="row">
            <div class="col-md-6 justify-content-center align-middle d-flex align-items-center">
              <div class="jumbotron bg-transparent">
                <p class="lead">
                  Cooca merupakan platform daring yang bergerak di bidang
                  konsumsi. Kami berfokus untuk memberikan layanan terkait info
                  gizi dan makanan. Informasi yang kamo berikan merupakan
                  informasi terpercaya dari sumber yang cukup kredible, yakno
                  Edamame.com dan aplikasi kami dapat digunakan dekaligus
                  dimodifikasi siapapun.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img src={who} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="bergabung">
        <div class="container">
          <h1
            class="display-5 text-center fontmarker fw-bold "
            style={{ color: "#7cb1ff" }}
          >
            Kenapa Pilih Kami
          </h1>
          <div class="row maratas50 mt-5">
            <div class="col-md-4 text-center">
              <img src={cepat} alt="" />
              <p>Proses Cepat</p>
            </div>
            <div class="col-md-4 text-center">
              <img src={mudah} alt="" />
              <p>Mudah</p>
            </div>
            <div class="col-md-4 text-center">
              <img src={murah} alt="" />
              <p>Gratis</p>
            </div>
          </div>
        </div>
      </section>

      <section class="unggulan customBlue text-center">
        <div class="container mt-5 mb-5">
          <h1 class="display-5 text-center fontmarker text-white mt-5 fw-bold">
            Fitur Unggulan
          </h1>
          <div class="row mt-5 mb-5 p-5">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <p
                    class="card-text h3  font-weight-bold"
                    style={{ color: "#7cb1ff" }}
                  >
                    Cari Resep
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <p
                    class="card-text  h3  font-weight-bold"
                    style={{ color: "#7cb1ff" }}
                  >
                    Lihat Detail
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <p
                    class="card-text  h3  font-weight-bold"
                    style={{ color: "#7cb1ff" }}
                  >
                    Rekomendasi{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="kontak text-center">
		<div class="container">
			<h1 class="display-5 text-center fontmarker  fw-bold" style={{ color: "#7cb1ff" }}>Hubungi Kami</h1>
			<div class="row">
				<div class="col-sm-3">
					<img src={fb} className="img-fluid" alt="" />
				</div>
				<div class="col-sm-3">
                <img src={tw} className="img-fluid" alt="" />
				</div>
				<div class="col-sm-3">
                <img src={ig} className="img-fluid" alt="" />
				</div>
				<div class="col-sm-3">
                <img src={mail} className="img-fluid" alt="" />
				</div>
			</div>
		</div>
	</section>
    </>
  );
};

export default Utama;
