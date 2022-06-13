import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div style="margin-bottom: 8px; font-size: 24px">👋🏼 Howdy friend!</div>
    <div>
      If you wish to know more about me you can check my
      <a
        style="margin-left:2px"
        target="_blank"
        href="http://www.github.com/fborges42"
        >github</a
      >
    </div>
    <div>
      or check my diverse thoughts on
      <a
        target="_blank"
        style="margin-left:2px"
        target="_blank"
        href="http://www.twitter.com/fbbrgs"
        >twitter</a
      >
    </div>
  `,
  styles: [
    `
      * {
        font-size: 16px;
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
