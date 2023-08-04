<template>
  <header>
    <a href="#" class="logo"
      ><img src="src/assets/pig.png" />Zero <span>friction</span></a
    >
    <nav>
      <a style="--clr: #000000" class="active" @click="scrollElement('Home')"
        >Home</a
      >
      <a style="--clr: #000000" @click="scrollElement('About')">About</a>
      <a style="--clr: #d9ef0c" @click="scrollElement('Servrice')">Servrice</a>
      <a style="--clr: #000000" @click="scrollElement('Contact')">Contact</a>
    </nav>

    <div class="toggle" @click="toggleMenu()">
      <font-awesome-icon
        :icon="isOpen ? 'xmark' : 'bars'"
        class="toggle-icon"
      />
    </div>

    <div class="dropdown">
      <li>
        <a style="--clr: #000000" class="active" @click="scrollElement('Home')"
          >Home</a
        >
      </li>
      <li>
        <a style="--clr: #000000" @click="scrollElement('About')">About</a>
      </li>
      <li>
        <a style="--clr: #d9ef0c" @click="scrollElement('Servrice')"
          >Servrice</a
        >
      </li>
      <li>
        <a style="--clr: #000000" @click="scrollElement('Contact')">Contact</a>
      </li>
    </div>
  </header>

  <section id="Home" style="--clr: #000000" class="home">
    <div class="home-text fadeInLeft">
      <h1>Zero</h1>
      <span>friction</span>
      <div class="txt">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi</p>
        <p>
          Velit, blanditiis et repudiandae dolores eveniet ipsa sunt dolorum.
        </p>
      </div>
    </div>
    <div class="home-img fadeInRight">
      <img src="src/assets/bic.png" />
    </div>
  </section>

  <section id="About" style="--clr: #000000" class="about">
    <div class="slide-start"><font-awesome-icon icon="arrow-left" /></div>
    <div class="card">
      <div class="title">
        <span>Lorem ipsum</span>
        <span>lorem</span>
      </div>
      <div class="img">
        <img src="src/assets/human.png" />
      </div>
      <div class="content">
        <p>Lorem ipsum is simple</p>
        <p>
          Velit, blanditiis et repudiandae dolores eveniet ipsa sunt dolorum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi
          Velit, blanditiis et repudiandae dolores eveniet ipsa sunt dolorum.
        </p>
      </div>
    </div>
    <div class="slide-end"><font-awesome-icon icon="arrow-right" /></div>
  </section>

  <section id="Servrice" style="--clr: #d9ef0c" class="servrice">
    <div class="title">
      <span>Lorem ipsum</span>
    </div>
    <div class="card">
      <div class="list" v-for="i in data" :key="i">
        <div class="list-img">
          <img src="src/assets/bic2.png" />
        </div>
        <div class="list-content">
          <p>{{ i.title }}</p>
          <span>
            {{ i.description }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <section id="Contact" style="--clr: #000000" class="contact">
    <div class="contact-img">
      <img src="src/assets/bic.png" />
    </div>
    <div class="contact-text">
      <span>ติดต่อเรา</span>
      <div class="form">
        <div class="form-input">
          <input type="text" name="" required="" />
          <label>ชื่อ - นามสกุล</label>
        </div>
        <div class="form-input">
          <input type="text" name="" required="" />
          <label>เบอร์ติดต่อ</label>
        </div>
        <div class="form-input">
          <input type="text" name="" required="" />
          <label>อีเมล</label>
        </div>
        <div class="form-input">
          <input
            type="text"
            name=""
            required=""
            onfocus="(this.type = 'date')"
            onblur="if(!this.value) this.type = 'text'"
          />
          <label>วันที่</label>
        </div>
        <div class="button">Lorem</div>
      </div>
    </div>
  </section>

  <div class="scroll-top" @click="scrollElement('Home')">
    <font-awesome-icon icon="arrow-up" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data: () => ({
    isOpen: false,
  }),
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
  mounted() {
    this.$store.dispatch("fetchData");
  },
  methods: {
    toggleMenu() {
      const dropdown = document.querySelector(".dropdown");
      dropdown.classList.toggle("open");
      this.isOpen = dropdown.classList.contains("open");
    },
    scrollElement(local) {
      document.getElementById(local).scrollIntoView({
        behavior: "smooth",
      });
    },
    handleScroll() {
      const windowheight = window.innerHeight;
      const detailpoint = 150;

      const card = document.querySelectorAll(".card");
      for (let index = 0; index < card.length; index++) {
        let detailtop = card[index].getBoundingClientRect().top;
        if (detailtop < windowheight - detailpoint) {
          card[index].classList.add("fadeInTop");
        }
      }

      const img = document.querySelector(".contact-img");
      const text = document.querySelector(".contact-text");
      if (
        (img.getBoundingClientRect().top && text.getBoundingClientRect().top) <
        windowheight - detailpoint
      ) {
        img.classList.add("fadeInLeft");
        text.classList.add("fadeInRight");
      }
      
      const scroll = document.querySelector(".scroll-top")
      if (window.scrollY > 1500) {
        scroll.style.display = "block"
      } else scroll.style.display = "none"
    },
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 80px 10px;
  text-transform: uppercase;
  z-index: 1;
}

header nav {
  display: flex;
  margin-left: 5em;
  gap: 10px;
}

header nav a {
  position: relative;
  text-decoration: none;
  padding: 12px 20px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
}

header nav a:hover {
  color: #d9ef0c;
}

header .toggle {
  color: #fff;
  cursor: pointer;
  display: none;
}

header .dropdown {
  position: absolute;
  display: none;
  width: 300px;
  height: 0;
  top: 80px;
  right: 4rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(100px);
  overflow: hidden;
  border-radius: 10px;
  transition: height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

header .dropdown.open {
  height: 300px;
}

header .dropdown li {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
}

header .dropdown li a {
  color: #fff;
  text-decoration: none;
}

header .dropdown li a:hover {
  color: #d9ef0c;
}

.logo {
  position: relative;
  color: #fff;
  font-size: 1.4em;
  font-weight: 700;
  font-style: italic;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
}

.logo img {
  width: 50px;
  margin-right: 1.5rem;
}

.logo span {
  margin-left: 0.6rem;
  color: #d9ef0c;
}

section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--clr);
}

.home {
  color: #fff;
  margin-top: 2rem;
}

.home h1,
.home span {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2.5rem;
  font-weight: 900;
}

.home span {
  color: #d9ef0c;
}

.home-text {
  width: 360px;
  padding: 2rem;
}

.home-text p {
  margin-top: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.home-text p:nth-child(2) {
  margin-top: 1rem;
  color: #a7a7a7;
}

.home-img img,
.contact-img img {
  width: 500px;
  padding: 2rem;
}

.about {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-start,
.slide-end {
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.slide-start {
  background: #fff;
}

.slide-start:hover {
  transform: translateX(5px);
}

.slide-end {
  background: #d9ef0c;
}

.slide-end:hover {
  transform: translateX(-5px);
}

.card {
  opacity: 0;
}

.card,
.contact .contact-text {
  color: #fff;
}

.card .title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 5px;
}

.card .title span:nth-child(2) {
  color: #d9ef0c;
  margin-left: 1rem;
}

.card .img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}

.card .img img {
  width: 150px;
}

.card .content {
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 50%;
  margin: auto;
}

.card .content p:nth-child(1) {
  margin-top: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.card .content p:nth-child(2) {
  margin-top: 1rem;
  text-align: center;
  color: #a7a7a7;
}

.servrice {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.servrice .title {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 3px;
}

.servrice .card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.servrice .card .list {
  background: #fff;
  margin: 0 1rem;
  color: #000;
  max-width: 300px;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border: 1px solid transparent;
  cursor: pointer;
}

.list .list-content {
  padding: 1rem;
  height: 200px;
}

.list .list-content p {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
}

.list .list-content span {
  color: #737373;
  font-size: 0.9rem;
}

.list .list-img {
  width: 100%;
}

.list .list-img img {
  object-fit: cover;
  width: 100%;
}

.contact .contact-text {
  margin-left: 3rem;
}

.contact .contact-text,
.contact .contact-img {
  opacity: 0;
}

.contact .contact-text span {
  font-weight: 900;
  font-size: 1.6rem;
}

.contact .contact-text .form {
  margin-top: 1rem;
}

.form-input {
  position: relative;
}

.form-input input {
  width: 250px;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.form-input label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.3s;
}

.form-input input:focus ~ label,
.form-input input:valid ~ label {
  top: -20px;
  left: 0;
  color: #d9ef0c;
  font-size: 12px;
}

.contact .contact-text .form .button {
  width: 60%;
  padding: 0.3rem;
  text-transform: uppercase;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #72b811;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: 0.5s;
}

.contact .contact-text .form .button:hover {
  background: #d9ef0c;
  color: #000;
}

::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

.scroll-top{
  position: fixed;
  display: none;
  bottom: 30px;
  right: 30px;
  background: #d9ef0c;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.4s;
}

.scroll-top:hover{
  transform: translateY(-10px);
}

.fadeInLeft {
  animation: fadeInLeft 1.5s both;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInRight {
  animation: fadeInRight 1.5s both;
  z-index: 0;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInTop {
  animation: fadeInTop 1.5s both;
}

@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 990px) {
  header {
    justify-content: space-between;
    padding: 20px 80px 20px;
  }

  header nav {
    display: none;
  }

  header .toggle,
  header .dropdown {
    display: block;
  }

  .home {
    flex-direction: column;
    margin-top: 6rem;
  }

  .home-img img,
  .contact-img img {
    width: 400px;
  }

  .card .title {
    font-size: 1.5rem;
  }

  .servrice {
    height: auto;
  }

  .servrice .title,
  .contact .contact-text {
    margin-top: 3rem;
  }

  .servrice .card {
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px 10px;
  }

  .servrice .card .list {
    margin-bottom: 3rem;
  }

  .contact {
    flex-direction: column;
  }

  .contact .contact-img {
    margin-top: 2rem;
  }

  .contact .contact-img img {
    width: 350px;
  }

  .contact .contact-text {
    margin-left: 0;
    margin-top: 0;
  }
}

@media (max-width: 700px) {
  .servrice .card {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 500px) {
  header {
    padding: 25px 80px 25px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .logo img {
    width: 40px;
  }
}

@media (max-width: 450px) {
  header {
    padding: 30px 80px 30px;
  }

  header .dropdown {
    width: 250px;
  }

  header .toggle {
    margin-left: 2rem;
  }

  .logo {
    font-size: 0.9rem;
  }

  .logo img {
    width: 30px;
  }

  .card .title {
    font-size: 1rem;
  }

  .card .content {
    font-size: 0.8rem;
  }

  .home-img img,
  .contact-img img {
    width: 350px;
  }
}
</style>
