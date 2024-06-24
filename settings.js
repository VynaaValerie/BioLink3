// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "media/vynaa.jpg", // Path ke favicon
  title: "Vynaa Valerie | Profile", // Judul halaman
  metaTitle: "Vynaa || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website Vynaa Valerie, Creator and Dev", // Deskripsi meta untuk SEO
  metaKeywords: "Vynaa, Vynaa Valerie, profile Vynaa, siapa Vynaa?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "media/vynaa.jpg", // Path ke gambar profil
  name: "Vynaa Valerie", // Nama profil
  occupation: "Creator & Developer", // Pekerjaan atau jabatan
  links: [
    { title: "GitHub", url: "https://github.com/VynaaValerie", icon: "fa-github" }, // Tautan GitHub
    { title: "Instagram", url: "https://www.instagram.com/vynaa_valerie", icon: "fa-instagram" }, // Tautan Instagram
    { title: "Telegram", url: "https://t.me/VLShop2", icon: "fa-telegram" }, // Tautan Telegram
    { title: "Email", url: "mailto:vynaavalerie@example.com", icon: "fa-envelope" }, // Tautan Email
    { title: "WhatsApp", url: "https://wa.me/6282389924037?text=hai", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { title: "YouTube", url: "https://youtube.com/@VynaaChan", icon: "fa-youtube" } // Tautan YouTube
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  // Hanya menambahkan tautan yang tidak kosong
  if (link.title && link.url) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
    linkBoxes.appendChild(linkElement);
  }
});
 
