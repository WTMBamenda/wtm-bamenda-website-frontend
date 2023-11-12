import "./Footer.css";

export default function Footer() {
  return (
  <div className="bottom-nav mt-5"> 
  <div class="container h-30 w-full p-4">
  <div class="row">
  <div class="col-4">
  <img id="footer-logo" src={require("../assets/logos/wtm-logo.png")} alt="WTM Logo" />
  <p class="small text-white"> 
            Lorem ipsum dolor sit amet consectetur. Sed vitae ornare amet
            fringilla erat. Ultrices bibendum nisl volutpat vestibulum
            consectetur nisl aenean eget in.
          </p>
          <button class="btn"  type="submit" id="joinbtn">Join Community</button>
          </div>
          <div class="col-4 d-flex flex-column align-items-center justify-content-center">
          <div class="nav-links"> 
          <li class="list-unstyled"><a class="text-decoration-none text-white" href="#">Home</a></li>
            <li class="list-unstyled"><a class="text-decoration-none text-white" href="#">About</a></li>
            <li class="list-unstyled"><a class="text-decoration-none text-white" href="#">Projects</a></li>
            <li class="list-unstyled"><a class="text-decoration-none  text-white" href="#">Events</a></li>
            <li class="list-unstyled"><a class="text-decoration-none text-white" href="#">Blog</a></li>
          </div>
          <div class="socials d-flex gap-2">
          <a href="#">
              <img class="socials-image"
                src={require("../assets/logos/linkedin-white.png")}
                alt="Linkedin Logo"/>
            </a>
            <a href="#">
              <img class="socials-image"
                src={require("../assets/logos/github-white.png")}
                alt="Github Logo"/>
            </a>
            <a href="#">
              <img class="socials-image" src={require("../assets/logos/X-white1.png")} alt="X Logo" />
            </a> 
          </div>
          </div>
          <div class="col-4">
          <h5 class="text-white">Leave us a message</h5>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"/>
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="email" rows="3" placeholder="message"></textarea>
          </div>
        <div class="flex justify-contents-end">
            <button class="btn"  type="submit" id="sendbtn">Send message</button>
        </div>
        </div>
        </div>
      </div>
      <div class="text-center small copy-right text-white">&copy;copyright WTM Bamenda</div>
    </div> 
  );
}
