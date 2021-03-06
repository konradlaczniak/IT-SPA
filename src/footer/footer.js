import $ from "jquery";

export const footer = () => {
  const foot = $(`
<footer>
    <div class="container-fluid border-top">
      <div class="row text-center bg-secondary text-light footer-style">
        <div class="col-md-4 company-details my-2">
          <h3>IT SPA Resort</h3>
          <p>ul. Informatyczna 1010<br>
          01-010 Programowo, Polska</p>
          <p>555-555-5555<br>
          IT-spa@mail.com</p>
        </div>
        <div class="col-md-4 align-self-center my-2">
          <h1 class="logo-footer">IT SPA</h1>
          <hr class="light">
        </div>
          <div class="col-md-4 align-self-center my-2">
            <h3 class="align-middle">Hotel's prizes</h3>
            <hr class="light">
            <div class="prizes">
              <div class="prize-item"><img src="https://img.icons8.com/cotton/64/000000/sport-badge--v2.png"/></div>
              <div class="prize-item"><img src="https://img.icons8.com/cotton/64/000000/the-oscars--v1.png"/></div>
              <div class="prize-item"><img src="https://img.icons8.com/cotton/64/000000/medal--v2.png"/></div>
            </div>
          </div>
      </div>
      <div class="row text-center bg-dark text-light p-1">
        <div class="col-md-4 align-self-center">
          <span>IT SPA</span>
        </div>
        <div class="col-md-4 align-self-center">
          <span>Copyright © IT SPA. All rights reserved.</span>
        </div>
        <div class="col-md-4">
          <div class="col-md-12 ">
            <span>Social media</span>
          </div>
          <div class="col-md-12 social">
            <a href="#"><i class="fab fa-facebook"> </i></a>
            <a href="#"><i class="fab fa-twitter"> </i></a>
            <a href="#"><i class="fab fa-instagram"> </i></a>
          </div>
          
        </div>
      </div>
    </div>
</footer>
    `);

  return foot;
};
