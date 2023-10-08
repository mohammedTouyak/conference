<template>
  <div class="ha-equipe">
    <h1 class="title">Comités</h1>

    <div style="padding: 15px">

      <div class="row">

        <div class="col-12">
          <strong class="h3 ha-click-event" v-on:click="fadeList('.ha-honneur-list')">Comité d’honneur</strong>
          <div class="list-type2 ha-honneur-list">

<!--            -->
            <ul class="list-group list-group-media">
                <li class="list-group-item " style="height: 69px;">
                  <div class="media" >
                    <div class="me-3">
                      <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                    </div>
                    <div class="media-body">
                      <h6 class="tx-inverse">MRABET Radouane</h6>
                      <p class="mg-b-0" style="margin-top:-18px;">Président de l'Université Sidi Mohammed Ben Abdallah, Fès</p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item " style="height: 69px;">
                  <div class="media" >
                    <div class="me-3">
                      <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                    </div>
                    <div class="media-body">
                      <h6 class="tx-inverse">IJJAALI Mustapha</h6>
                      <p class="mg-b-0" style="margin-top:-18px;">Doyen de la Faculté des Sciences et Techniques, Fès</p>
                    </div>
                  </div>
                </li>
            </ul>
<!--            nn-->
          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="h3 ha-click-event" v-on:click="fadeList('.ha-chairs-list')">Président</strong>
          <div class="list-type2 ha-chairs-list">

            <ul class="list-group list-group-media">

              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">MRABTI Fatiha</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Enseignant Chercheur chez Faculté des Sciences et Techniques de Fés</p>
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="h3 ha-click-event" v-on:click="fadeList('.ha-co-chairs-list')">Vices-président</strong>
          <div class="list-type2 ha-co-chairs-list">

            <ul class="list-group list-group-media">
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ALAMI HASSANI Aicha</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ABARKAN Mouna</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr>


        <div class="col-12">
          <strong class="h3 ha-click-event" v-on:click="fadeList('.ha-organisation-list')">Comité local</strong>
          <div class="list-type2 ha-organisation-list">

            <ul class="list-group list-group-media">
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">BEGDOURI Ahlam</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Vice Doyen de la Faculté des Sciences et Techniques, Fès</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ACHIBAT Taoufiq</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Doyen de la Faculté des Sciences et Techniques, Fès</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">MRABTI Fatiha</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Enseignant Chercheur chez Faculté des Sciences et Techniques de Fés</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ALAMI HASSANI Aicha</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ABARKANE Mouna</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">AHJYAJE Fatima Zahra</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">LAHBABI Mohammed</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ABDI Farid</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">BEN ABBOU Rachid</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">GHENNIOUI Hicham</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ECHATOUI Nor-Said</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">LAMCHARFI Taj-dine</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ZARED Kamal</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="h3 ha-click-event" v-on:click="fadeList('.ha-doctoral-list')">Comité doctoral</strong>
          <div class="list-type2 ha-doctoral-list">
            <ul class="list-group list-group-media">
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">GOUITAA Najoua</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">EL HAJJI NABIH Meryem</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="h3 ha-click-event" v-on:click="fadeList('.ha-technique-list')">Comité technique</strong>
          <div class="list-type2 ha-technique-list">

            <ul class="list-group list-group-media">
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">MRABTI FATIHA</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Enseignant Chercheur chez Faculté des Sciences et Techniques de Fés</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ALAMI HASSANI Aicha</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ABARKAN Mouna</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ERAOUI Hamza</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="h3 ha-click-event" v-on:click="fadeList('.ha-science-list')">Comité scientifique </strong>
          <div class="list-type2 ha-science-list">

            <ul class="list-group list-group-media">
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ABBASSI Latifa</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ABDI Farid</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item" style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">BEN ABBOU Rachid</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Enseignant Chercheur chez Faculté des Sciences et Techniques de Fés</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">BOUAYADE Mfadal</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item" style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ECHATOUI Nor-Said</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">EL AMRANI EL IDRISSI Najiba</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">EL OUAZZANI Nabih</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">IDRISSI KANDRI Noureddine</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">KABBAJ Hassane</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">LAHBABI Mohemmed</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">LAMCHARFI Taj-dine</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F" style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">MRABTI Fatiha</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Enseignant Chercheur chez Faculté des Sciences et Techniques de Fés</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">TAHRI Driss</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ZENKOUAR Khalid</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Enseignant Chercheur chez Faculté des Sciences et Techniques de Fés</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ZOUAK Mohcin</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F" style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ABARKANE Mouna</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ABBAD  Khalid</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F" style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">AHJYAJE Fatima Zahra</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">BOUSHABA Abdelali</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Enseignant Chercheur chez Faculté des Sciences et Techniques de Fés</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F" style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">CHAKER Ilham</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Enseignant Chercheur chez Faculté des Sciences et Techniques de Fés</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">GHENNIOUI Hicham</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">NAJAH Said</h6>
                    <p class="mg-b-0" style="margin-top:-18px;">Enseignant Chercheur chez Faculté des Sciences et Techniques de Fés</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item F" style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/no-photo-woman.png" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ALAMI HASSANI Aicha</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">EL BASSET Abdelhalim</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">ZARED Kamal</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
              <li class="list-group-item " style="height: 69px;">
                <div class="media" >
                  <div class="me-3">
                    <img alt="avatar" src="../assets/images/personne-image.jpg" class="circular-image">
                  </div>
                  <div class="media-body">
                    <h6 class="tx-inverse">AMARASS Mostapha</h6>
                    <p class="mg-b-0" style="margin-top:-18px;"></p>
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </div>
        <hr>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "EquipeDuColloque",
  methods:{

    fadeList: function (className){
      let selector = document.querySelector(className);
      let  disp = selector.style.display;
      if(disp === 'none')
      {
        selector.style.display = "block";
      }else{
        selector.style.display = "none";
      }
    }
  },
  created() {
    setTimeout(function () {
      let selector = document.querySelectorAll('.list-type2');
      console.log(selector);
      for (let i=0;i<selector.length;i++){
        selector[i].style.display = "none";
      }
    },100);


  },

}
</script>

<style scoped>
.media{
  display: flex;
}

.circular-image {
  width: 40px; /* Ajustez la taille en fonction de vos besoins */
  height: 40px;
  border-radius: 50%;
  margin: 5px; /* Ajustez la marge en fonction de vos besoins */
}

.list-group-item:hover{
  background-color: cornflowerblue;
}
.F:hover{
  background-color: mediumpurple;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
}



  .ha-equipe{
    padding: 20px 30px;
  }
  .ha-equipe h1{
    font-weight: bold;
    color: #4267b2;
    font-size: 2em;
  }
  .ha-equipe strong{
    font-size: 22px;
    cursor: pointer;
    padding: 15px;
  }


  .ha-equipe .list-group{
    margin: 20px 0px;
  }

  .ha-equipe .ha-custom-badge{
    position: absolute;
    right: 10px;
    top: 2px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 2px;
    margin-left: 15px;
    background-color: #EEE;
  }
  @media only screen and (max-width: 780px){
    .ha-equipe .ha-custom-badge {
      position: relative;
    }
  }
  .ha-equipe .ha-custom-badge:hover{
    background-color: gray;
    color: white;
  }


  .list-type2{
    width:90%;
    margin:0 auto;
    display: block;
  }

  @media only screen and (max-width: 700px) {
    .list-type2{
      width: 100%;
    }
  }
  .list-type2 ol{
    counter-reset: li;
    list-style: none;
    *list-style: decimal;
    font-size: 17px;
    font-family: 'Raleway', sans-serif;
    padding: 0;
    margin-bottom: 4em;
  }

  .list-type2 ol ol{
    margin: 0 0 0 2em;
  }

  .list-type2 a{
    position: relative;
    display: block;
    padding: .4em .4em .4em 2em;
    *padding: .4em;
    margin: .5em 0;
    background: #f5f5f5;
    color: #444;
    text-decoration: none;
    transition: all .2s ease-in-out;
  }



  .list-type2 a:before{
    content: "●";
    position: absolute;
    left: -1.3em;
    top: 50%;
    margin-top: -1.3em;
    background: #eeeeee;
    height: 2em;
    width: 2em;
    line-height: 1.5em;
    border: .3em solid #fff;
    text-align: center;
    font-weight: bold;
    color: gray;
  }
</style>
