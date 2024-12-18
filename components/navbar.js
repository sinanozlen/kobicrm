const NavbarHtml = `

<div id="root" class="mx-0 px-0 w-full">
    <!-- Üst bilgi çubuğu -->
    <div class="bg-blue-600 py-2 w-full">
        <div class="flex justify-between items-center px-6">
            <!-- Tıklanabilir Mobile Uygulama Metni -->
            <a href="/" class="text-white text-base font-normal hover:underline">
                Mobile uygulamamızı şimdi indirin %20 indirim kazanın
            </a>
            <div class="flex space-x-6">
                <a class="text-white hover:underline text-sm" href="#">English</a>
                <a class="text-white hover:underline flex items-center text-sm" href="/login.html">
                    Giriş Yap
                </a>
            </div>
        </div>
    </div>
</div>


  <div class="header my-5 flex justify-between items-center px-4">
            <a href="/">
                <img src="./img/kobicrm-logo.png" alt="KobiCRM Logo" class="w-45 h-10">
            </a>
        </div>
    

    <!-- Menü Çubuğu -->
    <nav id="menu" class="bg-gray-100 border-t border-gray-300 w-full py-2">
        <div class="flex justify-between items-center px-6">
            <!-- Sol: Ana Sayfa -->
            <a href="./" class="text-blue-600 hover:text-blue-800 flex items-center">
                <i class="fa fa-home"></i>
            </a>

            <!-- Ortada Menü Öğeleri -->
<div class="flex items-center space-x-4">
    <a href="./about.html" class="text-gray-700 hover:text-blue-600">Hakkımızda</a>
    <div class="w-px h-5 bg-gray-300"></div>
    <a href="./pricing.html" class="text-gray-700 hover:text-blue-600">Fiyatlar</a>
</div>

            <!-- Sağ: Kullanıcı Menüsü -->
            <div class="relative flex items-center space-x-6">
                <a href="#" class="text-black hover:text-blue-600 flex items-center" id="userMenuToggle">
                    <i class="fa fa-user mr-2"></i> Kullanıcı Adı
                </a>

                <!-- Kullanıcı Alt Menüsü -->
                <ul id="userMenu" class="absolute right-0 bg-white shadow-lg mt-2 hidden rounded-md">
                    <li><a class="block px-4 py-2 text-blue-900 hover:bg-blue-100" href="#">Hesabım</a></li>
                    <li><hr class="border-gray-300"></li>
                    <li><a class="block px-4 py-2 text-blue-900 hover:bg-blue-100" href="#">Çıkış Yap</a></li>
                </ul>

                <!-- Kayıt Ol Butonu -->
                <a href="/register.html" class="text-black hover:text-blue-600 flex items-center">
                    <i class="fa fa-user-plus mr-2"></i> Kayıt Ol
                </a>
            </div>
        </div>
    </nav>
</div>
`;
