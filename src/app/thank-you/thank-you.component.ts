import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-thank-you",
  template: `
    <div style="margin-bottom: 8px">
      💡 If you think I helped you or challenged your mind, feel free to buy me
      a coffee using the link (beer is cool as well!)
    </div>
    <div style="margin: 16px">
      <a
        style="margin-left:2px; font-size: 20px"
        target="_blank"
        href="https://www.buymeacoffee.com/fborges42"
        >buymeacoffee.com/fborges42</a
      >
    </div>
    <div>
      If I didn't challenge you or I shared wrong information feel free to point
      it out, also if you don't want to buy me a coffee we're cool aswell 😘
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
export class ThankYouComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
