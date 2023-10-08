<template>
  <div class="ha-inscription">
    <h2>Inscription</h2>

    <div class="ha-inscription-content" >

<!--      <h4>Formulaire d'inscription</h4>-->
<!--      <ul>-->
<!--        <li>-->
<!--          <a href="#">Télécharger le formulaire d'inscription</a>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <h4>Frais d'inscription</h4>-->
<!--      <table>-->
<!--        <tr>-->
<!--          <td>Etudiant/Doctorant</td>-->
<!--          <td>   :  </td>-->
<!--          <td>300 DH</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>Enseignant Chercheur</td>-->
<!--          <td>   :  </td>-->
<!--          <td> 800 DH</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>Autres</td>-->
<!--          <td>   :  </td>-->
<!--          <td>1200 DH</td>-->
<!--        </tr>-->

<!--      </table>-->
<!--      <p class="text-danger">Les frais d’inscription comprennent: la documentation de la rencontre, les pauses café et le déjeuner</p>-->
<!--    -->

      <div class="cards">
        <div class="card shadow">
          <ul>
            <li class="pack">Etudiant/Doctorant</li>
            <li id="basic" class="price bottom-bar">300 DH</li>
            <li class="bottom-bar">documentation de la rencontre</li>
            <li class="bottom-bar">pauses café</li>
            <li class="bottom-bar">pauses déjeuner</li>
            <li><button class="btn active-btn">Learn More</button></li>
          </ul>
        </div>
        <div class="card active" style="margin-left: 12px; margin-right: 12px">
          <ul>
            <li class="pack">Enseignant Chercheur</li>
            <li id="professional" class="price bottom-bar">800 DH</li>
            <li class="bottom-bar">documentation de la rencontre</li>
            <li class="bottom-bar">pauses café</li>
            <li class="bottom-bar">pauses déjeuner</li>
            <li><button class="btn active-btn">Learn More</button></li>
          </ul>
        </div>
        <div class="card shadow">
          <ul>
            <li class="pack">Autres</li>
            <li id="master" class="price bottom-bar">1200 DH</li>
            <li class="bottom-bar">documentation de la rencontre</li>
            <li class="bottom-bar">pauses café</li>
            <li class="bottom-bar">pauses déjeuner</li>
            <li><button class="btn active-btn">Learn More</button></li>
          </ul>
        </div>

      </div>
    </div>


    <div id="modalVerticallyCentered" class="col-lg-12 layout-spacing" style="margin-top: 20px">
      <div class="statbox widget box box-shadow">
        <div class="widget-header">
          <div class="row">
            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
              <h4>Formulaire d'inscription</h4>
            </div>
          </div>
        </div>
        <div class="widget-content widget-content-area">
          <p class="mb-3">Pour <code>.Télécharger le formulaire d'inscription</code> Click sur ici.</p>

          <div class="#">
            <!-- Button trigger modal -->
<!--            <button style="margin-left: 400px"  type="button" class="Mybtn btn-primary mb-2 mr-2" >-->
<!--              ici-->
<!--            </button>-->
            <a href="#" class="Mybtn">ici</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inscription",

}
</script>

<style scoped>

.Mybtn{
  color: white;
  padding: 0.4375rem 1.25rem;
  text-shadow: none;
  font-size: 14px;
  background-color: #4b7bec;
  font-weight: normal;
  white-space: normal;
  word-wrap: break-word;
  transition: 0.2s ease-out;
  touch-action: manipulation;
  border-radius: 12px;
  cursor: pointer;
  will-change: opacity, transform;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  margin-top: 15px;
  border-radius: 6px;
  width: 60px;
  margin-left: 469px;
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  background: #fff;
  color: hsl(233, 13%, 49%);
  border-radius: 0.8rem;
}

.cards .card.active {
  background: linear-gradient(
      135deg,
      rgba(163, 168, 240, 1) 0%,
      rgba(105, 111, 221, 1) 100%
  );
  color: #fff;
  display: flex;
  align-items: center;
  transform: scale(1.1);
  z-index: 1;
}
ul {
  margin: 2.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
ul li {
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
}
ul li.price {
  font-size: 3rem;
  color: hsl(232, 13%, 33%);
  padding-bottom: 2rem;
}
.shadow {
  box-shadow: -5px 5px 15px 1px rgba(0, 0, 0, 0.1);
}

.card.active .price {
  color: #fff;
}

.btn {
  margin-top: 1rem;
  height: 2.6rem;
  width: 13.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background:linear-gradient(135deg, #4287f5 0%, #1c5c9c 100%);
  color: #fff;
  outline: none;
  border: 0;
  font-weight: bold;
}
.active-btn {
  background: #fff;
  color: hsl(237, 63%, 64%);
}
.bottom-bar {
  border-bottom: 2px solid hsla(240, 8%, 85%, 0.582);
}
.card.active .bottom-bar {
  border-bottom: 2px solid hsla(240, 8%, 85%, 0.253);
}
.pack {
  font-size: 1.1rem;
}

@media (max-width: 280px) {
  ul {
    margin: 1rem;
  }
  h1 {
    font-size: 1.2rem;
  }
  .toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80px;
  }
  .cards {
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .card {
    transform: scale(0.8);
    margin-bottom: 1rem;
  }
  .cards .card.active {
    transform: scale(0.8);
  }
}

@media (min-width: 280px) and (max-width: 320px) {
  ul {
    margin: 20px;
  }
  .cards {
    display: flex;
    flex-direction: column;
  }
  .card {
    margin-bottom: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}

@media (min-width: 320px) and (max-width: 414px) {
  .cards {
    display: flex;
    flex-direction: column;
  }
  .card {
    margin-bottom: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}
@media (min-width: 414px) and (max-width: 768px) {
  .card {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  .cards .card.active {
    transform: scale(1);
  }
}
@media (min-width: 768px) and (max-width: 1046px) {
  .cards {
    display: flex;
  }

  .card {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  .cards .card.active {
    transform: scale(1);
  }
}
















.ha-inscription{
  padding: 20px 30px;

}

.ha-inscription h2{
  font-weight: bold;
  color: #4267b2;
}

.ha-inscription-content{
  padding: 20px;
}
.ha-inscription-content ul{
  list-style: none;
}
.ha-inscription-content a{
  text-decoration: none;
  color: #2196f3;
}

</style>
