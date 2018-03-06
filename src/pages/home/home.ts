import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Flashlight } from "@ionic-native/flashlight";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  color = "secondary";
  constructor(public navCtrl: NavController, private flashlight: Flashlight) {}
  flashlightToggle() {
    this.flashlight.toggle();

    if (this.flashlight.isSwitchedOn()) {
      this.color = "danger";
    } else {
      this.color = "secondary";
    }
  }
}
