# Angular Built-in Directives

Angular'da yerleşik (built-in) direktifler, Angular'ın varsayılan olarak sağladığı ve yaygın olarak kullanılan direktiflerdir.

## Attribute Directive'ler

Attribute directive'ler, bir DOM elementinin görünümünü veya davranışını değiştiren direktiflerdir.

- **ngClass:** Bir elemente koşullu olarak CSS sınıfları ekler.
  Örnek: `<div [ngClass]="{'class-name': condition}"></div>`

- **ngStyle:** Bir elemente koşullu olarak stil (style) ekler.
  Örnek: `<div [ngStyle]="{'color': 'red'}"></div>`

- **ngModel:** Angular formlarında iki yönlü veri bağlama (two-way data binding) sağlar.
  Örnek: `<input [(ngModel)]="property">`

## Structural Directive'ler

Yapısal direktifler, DOM elementlerinin yapısını değiştirir; yani, elementleri ekler veya kaldırır.

- **ngIf:** Bir koşulun doğru olması durumunda bir elementi DOM'a ekler, yanlış olması durumunda kaldırır.
  Örnek: `<div *ngIf="condition">Content</div>`

- **ngFor:** Bir koleksiyon üzerindeki her öğe için bir elementi tekrarlar.
  Örnek: `<div *ngFor="let item of items">{{ item }}</div>`

- **ngSwitch:** Bir elementin birden fazla alternatif içerik arasında koşullu olarak geçiş yapmasını sağlar.
  Örnek: 


  <div [ngSwitch]="expression">
    <div *ngSwitchCase="'case1'">Case 1</div>
    <div *ngSwitchCase="'case2'">Case 2</div>
    <div *ngSwitchDefault>Default Case</div>
  </div>
