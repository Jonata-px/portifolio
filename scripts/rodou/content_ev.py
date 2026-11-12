# -*- coding: utf-8 -*-
# Modo elétrico (Rodou 1.1.0): seção, item de menu e pergunta do FAQ, nos 10 idiomas.
# build_content.py junta isto ao conteúdo de cada idioma (chaves "electric", "nav.electric" e um item extra no FAQ).

def ev(nav, title, intro, pts, alts, q, a, videoTitle):
    icons = ["bolt", "home", "clock", "calc"]
    return dict(
        nav=nav,
        electric=dict(
            title=title, intro=intro, videoTitle=videoTitle,
            points=[dict(icon=i, title=p[0], text=p[1]) for i, p in zip(icons, pts)],
            alts=alts),
        faq=dict(q=q, a=a))

EV = {}

EV["pt"] = ev("Elétricos",
 "Agora também para carros elétricos e híbridos plug-in",
 "Registre recargas, veja o consumo em km/kWh e quanto custa cada km de verdade. Sem planilha e sem conta.",
 [("Recarga em segundos", "Escolha onde carregou, arraste de quantos por cento a quantos e o Rodou calcula os kWh, as perdas e o custo."),
  ("Casa × rua", "Veja quanto o kWh custa em casa e no eletroposto, lado a lado, e quanto da sua energia vem de cada um."),
  ("Lucro por hora com a recarga", "No Meu dia, o tempo parado carregando fora de casa entra na conta do lucro por hora."),
  ("Vale a pena trocar?", "O simulador compara com a gasolina usando os seus números e mostra a economia por mês e em quanto tempo ela se paga.")],
 ["Painel do carro elétrico no Rodou com consumo em km/kWh, custo por km e casa × rua", "Registro de recarga por porcentagem da bateria no Rodou", "Simulador: vale a pena trocar para elétrico?"],
 "O Rodou funciona com carro elétrico e híbrido plug-in?",
 "Sim. Cadastre o veículo como elétrico ou híbrido plug-in, informe a bateria e registre cada recarga em kWh ou por porcentagem da bateria. O app calcula o consumo real em km/kWh, o custo por km e a diferença entre carregar em casa e na rua.",
 "Veja o modo elétrico em ação")

EV["en"] = ev("Electric",
 "Now for electric and plug-in hybrid cars too",
 "Log charges, see your efficiency in miles per kWh and what each mile really costs. No spreadsheet, no account.",
 [("Log a charge in seconds", "Pick where you charged, slide the battery level, and Rodou works out the kWh, the losses and the cost."),
  ("Home vs. public", "See what a kWh costs at home and at public chargers, side by side, and how much of your energy comes from each."),
  ("Profit per hour, charging included", "In My day, time parked at a charger away from home counts toward your profit per hour."),
  ("Is switching worth it?", "The simulator compares against gasoline with your own numbers and shows the monthly savings and the payback time.")],
 ["Rodou electric car dashboard with efficiency, cost per mile and home vs. public charging", "Logging a charge by battery percentage in Rodou", "Simulator: is switching to electric worth it?"],
 "Does Rodou work with electric and plug-in hybrid cars?",
 "Yes. Add your vehicle as electric or plug-in hybrid, enter the battery size and log each charge in kWh or by battery percentage. The app works out your real efficiency in kWh, your cost per mile and the difference between charging at home and in public.",
 "See electric mode in action")

EV["es"] = ev("Eléctricos",
 "Ahora también para coches eléctricos e híbridos enchufables",
 "Registra recargas, mira tu consumo en km/kWh y cuánto cuesta de verdad cada kilómetro. Sin hojas de cálculo ni cuenta.",
 [("Recarga en segundos", "Elige dónde cargaste, arrastra el nivel de batería y Rodou calcula los kWh, las pérdidas y el costo."),
  ("Casa y calle", "Mira cuánto cuesta el kWh en casa y en un punto público, lado a lado, y cuánta de tu energía viene de cada uno."),
  ("Beneficio por hora con la recarga", "En Mi día, el tiempo parado cargando fuera de casa cuenta en el beneficio por hora."),
  ("¿Vale la pena cambiar?", "El simulador compara con la gasolina usando tus números y muestra el ahorro mensual y cuándo se paga.")],
 ["Panel del coche eléctrico en Rodou con consumo en km/kWh, costo por km y casa frente a calle", "Registro de recarga por porcentaje de batería en Rodou", "Simulador: ¿vale la pena pasarse al eléctrico?"],
 "¿Rodou funciona con coches eléctricos e híbridos enchufables?",
 "Sí. Añade el vehículo como eléctrico o híbrido enchufable, indica la batería y registra cada recarga en kWh o por porcentaje de batería. La app calcula tu consumo real en km/kWh, el costo por km y la diferencia entre cargar en casa y en la calle.",
 "Mira el modo eléctrico en acción")

EV["fr"] = ev("Électriques",
 "Désormais aussi pour les voitures électriques et hybrides rechargeables",
 "Enregistrez vos recharges, suivez votre consommation en km/kWh et le vrai coût de chaque kilomètre. Sans tableur ni compte.",
 [("Recharge en quelques secondes", "Choisissez où vous avez rechargé, faites glisser le niveau de batterie et Rodou calcule les kWh, les pertes et le coût."),
  ("Maison ou borne", "Voyez le prix du kWh à la maison et en borne publique, côte à côte, et la part d'énergie qui vient de chacun."),
  ("Profit horaire, recharge comprise", "Dans Ma journée, le temps passé à recharger hors de chez vous compte dans le profit par heure."),
  ("Ça vaut le coup de passer ?", "Le simulateur compare avec l'essence selon vos chiffres et montre l'économie mensuelle et le délai d'amortissement.")],
 ["Tableau de bord de la voiture électrique dans Rodou : consommation en km/kWh, coût au km, maison ou borne", "Enregistrement d'une recharge par pourcentage de batterie dans Rodou", "Simulateur : passer à l'électrique, ça vaut le coup ?"],
 "Rodou fonctionne-t-il avec les voitures électriques et hybrides rechargeables ?",
 "Oui. Ajoutez le véhicule comme électrique ou hybride rechargeable, indiquez la batterie et enregistrez chaque recharge en kWh ou en pourcentage de batterie. L'appli calcule votre consommation réelle en km/kWh, le coût au km et l'écart entre recharge à la maison et en borne publique.",
 "Découvrez le mode électrique en action")

EV["de"] = ev("Elektro",
 "Jetzt auch für Elektro- und Plug-in-Hybridautos",
 "Erfasse Ladevorgänge, sieh deinen Verbrauch in km/kWh und was jeder Kilometer wirklich kostet. Ohne Tabelle, ohne Konto.",
 [("Laden in Sekunden", "Wähle den Ladeort, ziehe den Akkustand auf und Rodou berechnet kWh, Ladeverluste und Kosten."),
  ("Zuhause vs. unterwegs", "Sieh den kWh-Preis zuhause und an öffentlichen Ladesäulen nebeneinander und wie viel Energie aus welcher Quelle kommt."),
  ("Gewinn pro Stunde inklusive Laden", "In Mein Tag zählt die Standzeit beim Laden unterwegs in den Gewinn pro Stunde."),
  ("Lohnt sich der Umstieg?", "Der Simulator vergleicht mit Benzin anhand deiner Zahlen und zeigt Ersparnis pro Monat und Amortisation.")],
 ["Rodou-Dashboard eines Elektroautos mit Verbrauch in km/kWh, Kosten pro km und Zuhause vs. unterwegs", "Ladevorgang in Rodou per Akku-Prozent erfassen", "Simulator: Lohnt sich ein Elektroauto?"],
 "Funktioniert Rodou mit Elektro- und Plug-in-Hybridautos?",
 "Ja. Lege das Fahrzeug als Elektro oder Plug-in-Hybrid an, gib die Akkugröße an und erfasse jeden Ladevorgang in kWh oder per Akku-Prozent. Die App berechnet deinen echten Verbrauch in km/kWh, die Kosten pro km und den Unterschied zwischen Laden zuhause und unterwegs.",
 "Der Elektro-Modus in Aktion")

EV["it"] = ev("Elettriche",
 "Ora anche per auto elettriche e ibride plug-in",
 "Registra le ricariche, guarda il consumo in km/kWh e quanto costa davvero ogni chilometro. Senza fogli di calcolo né account.",
 [("Ricarica in pochi secondi", "Scegli dove hai ricaricato, trascina il livello della batteria e Rodou calcola kWh, perdite e costo."),
  ("Casa e colonnine", "Guarda quanto costa un kWh a casa e in colonnina, affiancati, e quanta energia viene da ciascuna."),
  ("Guadagno orario con la ricarica", "In Il mio giorno, il tempo fermo a ricaricare fuori casa conta nel guadagno orario."),
  ("Conviene passare?", "Il simulatore confronta con la benzina usando i tuoi numeri e mostra il risparmio mensile e i tempi di rientro.")],
 ["Cruscotto dell'auto elettrica in Rodou con consumo in km/kWh, costo al km e casa e colonnine", "Registrazione di una ricarica per percentuale di batteria in Rodou", "Simulatore: conviene passare all'elettrico?"],
 "Rodou funziona con auto elettriche e ibride plug-in?",
 "Sì. Aggiungi il veicolo come elettrico o ibrido plug-in, indica la batteria e registra ogni ricarica in kWh o per percentuale di batteria. L'app calcola il consumo reale in km/kWh, il costo al km e la differenza tra ricaricare a casa e in colonnina.",
 "La modalità elettrica in azione")

EV["tr"] = ev("Elektrikli",
 "Artık elektrikli ve şarj edilebilir hibrit araçlar için de",
 "Şarjlarını kaydet, km/kWh tüketimini ve her kilometrenin gerçek maliyetini gör. Tablo yok, hesap yok.",
 [("Saniyeler içinde şarj kaydı", "Nerede şarj ettiğini seç, batarya seviyesini kaydır; Rodou kWh, kayıp ve maliyeti hesaplar."),
  ("Ev ve dış şarj", "kWh'nin evde ve halka açık istasyonda kaça geldiğini yan yana gör, enerjinin ne kadarının nereden geldiğini öğren."),
  ("Şarj dahil saatlik kâr", "Günüm'de evin dışında şarjda beklediğin süre saatlik kâra dahil edilir."),
  ("Geçmeye değer mi?", "Simülatör, kendi rakamlarınla benzinle kıyaslar; aylık tasarrufu ve kendini kaç ayda amorti ettiğini gösterir.")],
 ["Rodou elektrikli araç paneli: km/kWh tüketim, km maliyeti, ev ve dış şarj", "Rodou'da batarya yüzdesiyle şarj kaydı", "Simülatör: elektrikliye geçmeye değer mi?"],
 "Rodou elektrikli ve şarj edilebilir hibrit araçlarla çalışır mı?",
 "Evet. Aracı elektrikli veya şarj edilebilir hibrit olarak ekle, batarya kapasitesini gir ve her şarjı kWh veya batarya yüzdesiyle kaydet. Uygulama gerçek km/kWh tüketimini, km başına maliyeti ve evde ile dışarıda şarj arasındaki farkı hesaplar.",
 "Elektrik modunu iş başında gör")

EV["pl"] = ev("Elektryki",
 "Teraz także dla aut elektrycznych i hybryd plug-in",
 "Zapisuj ładowania, sprawdzaj zużycie w km/kWh i prawdziwy koszt każdego kilometra. Bez arkusza i bez konta.",
 [("Ładowanie w kilka sekund", "Wybierz miejsce ładowania, przesuń poziom baterii, a Rodou policzy kWh, straty i koszt."),
  ("Dom kontra stacje", "Zobacz obok siebie cenę kWh w domu i na stacji publicznej oraz ile energii pochodzi z każdego źródła."),
  ("Zysk na godzinę z ładowaniem", "W Moim dniu czas postoju na ładowaniu poza domem wlicza się do zysku na godzinę."),
  ("Czy warto się przesiąść?", "Symulator porównuje z benzyną na Twoich liczbach i pokazuje miesięczną oszczędność oraz czas zwrotu.")],
 ["Panel auta elektrycznego w Rodou: zużycie w km/kWh, koszt na km, dom i stacje", "Zapis ładowania według procentu baterii w Rodou", "Symulator: czy warto przesiąść się na elektryka?"],
 "Czy Rodou działa z autami elektrycznymi i hybrydami plug-in?",
 "Tak. Dodaj pojazd jako elektryczny lub hybrydę plug-in, podaj pojemność baterii i zapisuj każde ładowanie w kWh lub według procentu baterii. Aplikacja liczy realne zużycie w km/kWh, koszt na km oraz różnicę między ładowaniem w domu i na stacji.",
 "Tryb elektryczny w akcji")

EV["id"] = ev("Listrik",
 "Kini juga untuk mobil listrik dan hibrida plug-in",
 "Catat pengisian, lihat konsumsi dalam km/kWh dan biaya sebenarnya tiap kilometer. Tanpa spreadsheet, tanpa akun.",
 [("Catat pengisian dalam detik", "Pilih lokasi pengisian, geser level baterai, dan Rodou menghitung kWh, kehilangan daya, serta biayanya."),
  ("Rumah vs. umum", "Lihat harga kWh di rumah dan di SPKLU secara berdampingan, serta berapa energi dari masing-masing."),
  ("Laba per jam termasuk mengisi", "Di Hariku, waktu menunggu pengisian di luar rumah ikut dihitung dalam laba per jam."),
  ("Layak beralih?", "Simulator membandingkan dengan bensin memakai angkamu dan menunjukkan hemat per bulan serta lama balik modal.")],
 ["Dasbor mobil listrik di Rodou: konsumsi km/kWh, biaya per km, rumah vs. umum", "Mencatat pengisian lewat persentase baterai di Rodou", "Simulator: layak beralih ke mobil listrik?"],
 "Apakah Rodou bisa untuk mobil listrik dan hibrida plug-in?",
 "Bisa. Tambahkan kendaraan sebagai listrik atau hibrida plug-in, isi kapasitas baterai, lalu catat tiap pengisian dalam kWh atau persentase baterai. Aplikasi menghitung konsumsi riil km/kWh, biaya per km, dan selisih antara mengisi di rumah dan di luar.",
 "Lihat mode listrik beraksi")

EV["vi"] = ev("Xe điện",
 "Nay có cả cho ô tô điện và hybrid plug-in",
 "Ghi lại các lần sạc, xem mức tiêu thụ km/kWh và chi phí thật của mỗi km. Không bảng tính, không cần tài khoản.",
 [("Ghi lần sạc trong vài giây", "Chọn nơi sạc, kéo mức pin, Rodou tính ra kWh, hao hụt và chi phí."),
  ("Sạc tại nhà và trạm công cộng", "Xem giá kWh ở nhà và ở trạm công cộng cạnh nhau, và bao nhiêu điện đến từ mỗi nơi."),
  ("Lợi nhuận theo giờ, gồm cả giờ sạc", "Trong Ngày của tôi, thời gian chờ sạc bên ngoài được tính vào lợi nhuận theo giờ."),
  ("Có đáng đổi sang xe điện?", "Trình mô phỏng so sánh với xăng bằng số liệu của bạn, cho thấy khoản tiết kiệm mỗi tháng và thời gian hoàn vốn.")],
 ["Bảng điều khiển xe điện trong Rodou: tiêu thụ km/kWh, chi phí mỗi km, sạc nhà và trạm công cộng", "Ghi lần sạc theo phần trăm pin trong Rodou", "Mô phỏng: có đáng đổi sang xe điện?"],
 "Rodou có dùng được cho ô tô điện và hybrid plug-in không?",
 "Có. Thêm xe là xe điện hoặc hybrid plug-in, nhập dung lượng pin và ghi mỗi lần sạc theo kWh hoặc phần trăm pin. Ứng dụng tính mức tiêu thụ thực tế km/kWh, chi phí mỗi km và chênh lệch giữa sạc ở nhà và sạc bên ngoài.",
 "Xem chế độ xe điện hoạt động")

TAGS = dict(pt="Novidade", en="New", es="Novedad", fr="Nouveau", de="Neu", it="Novità", tr="Yeni", pl="Nowość", id="Baru", vi="Mới")
for _k, _t in TAGS.items():
    EV[_k]["electric"]["tag"] = _t
