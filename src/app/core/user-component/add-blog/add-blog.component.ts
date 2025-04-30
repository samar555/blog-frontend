import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-add-blog',
  imports: [CKEditorModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent {
editor:any=null;
constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  if (isPlatformBrowser(this.platformId)) {
    import('@ckeditor/ckeditor5-build-classic').then(module => {
      this.editor = module.default;
    });
  }
}
}
