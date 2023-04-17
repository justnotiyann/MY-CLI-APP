# SIMPLE CREATE API FOLDER EXPRESS

##### **LATAR BELAKANG**

Express merupakan framework dari nodejs yang memiliki fleksibilitas penuh terhadap usernya sehingga dikenal dengan julukan framework nodejs yang unopiniated. Hal ini sangat berguna apabila kita membuat project express dengan skala kecil. Namun jika kita ingin menscale-up aplikasinya kita harus memiliki aturan agar semua developer paham akan yang kita gunakan.

Maka dari itu package sederhana ini meruapakan project kecil saya untuk membuat folder api lebih tertata dan menerapkan prinsip Single Responsibility Principle dimana setiap file hanya memiliki satu fungsi saja

##### **INSTALASI**

Using npm

```bash
npm i -g .
```

##### **FITUR**

1. Membuat file untuk handle logic api yang terdiri dari :

   - File Routes : Untuk mendaftarkan routes api

   - File Controller : Melakukan semua logic untuk routes tersebut

   - File Services : Handle file logic untuk file controller

2. Membuat file untuk handle models dalam menghandle model database

##### **DEMO**

1. Buka Terminal pada project kalian

   ![](/images/update-demo.gif)

2. Voila sebuah folder beserta file sudah tersedia

   ![](/images/update-voila.png)
