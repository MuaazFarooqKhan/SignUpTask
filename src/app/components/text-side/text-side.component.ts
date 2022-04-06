import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {THUMBUP_ICON,ACTIVITY_ICON,PERCENT_ICON,FAST_ICON,SHIELD_ICON,CHECKED_ICON,CROSS_ICON} from '../signup/icons'

@Component({
  selector: 'app-text-side',
  templateUrl: './text-side.component.html',
  styleUrls: ['./text-side.component.scss']
})
export class TextSideComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    iconRegistry.addSvgIconLiteral('activity', sanitizer.bypassSecurityTrustHtml(ACTIVITY_ICON));
    iconRegistry.addSvgIconLiteral('percent', sanitizer.bypassSecurityTrustHtml(PERCENT_ICON));
    iconRegistry.addSvgIconLiteral('fast', sanitizer.bypassSecurityTrustHtml(FAST_ICON));
    iconRegistry.addSvgIconLiteral('shield', sanitizer.bypassSecurityTrustHtml(SHIELD_ICON));
    iconRegistry.addSvgIconLiteral('checked', sanitizer.bypassSecurityTrustHtml(CHECKED_ICON));
    iconRegistry.addSvgIconLiteral('cross', sanitizer.bypassSecurityTrustHtml(CROSS_ICON));
   }

  ngOnInit(): void {
  }

}
