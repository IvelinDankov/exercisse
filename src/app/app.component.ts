import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ControlComponent } from "./shared/control/control.component";
import { ButtonComponent } from "./shared/button/button.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ControlComponent, ButtonComponent, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "exercisse";

  onSubmit(title: string, text: string, form: HTMLFormElement) {
    console.log(title);
    console.log(text);

    form.reset();
  }
}
