package com.realestate.config;

import com.realestate.model.Project;
import com.realestate.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final ProjectRepository projectRepository;

    @Override
    public void run(String... args) {
        if (projectRepository.count() > 0) return;

        List<Project> projects = Arrays.asList(

            Project.builder()
                .name("Bahria Skyline Tower")
                .nameAr("برج بحريا سكاي لاين")
                .description("A 35-storey luxury residential tower featuring panoramic city views, rooftop infinity pool, smart home automation, and 24/7 concierge service. Premium 2, 3 & 4 bedroom apartments available.")
                .descriptionAr("ناطحة سحاب سكنية فاخرة من 35 طابقاً توفر إطلالات بانورامية خلابة على المدينة، ومسبحاً لا نهائياً على السطح، وأنظمة منزل ذكي متكاملة، وخدمة كونسيرج على مدار الساعة. شقق راقية بغرفتين وثلاث وأربع غرف نوم متاحة للتملّك.")
                .location("Bahria Town, Lahore")
                .locationAr("بحريا تاون، لاهور")
                .status("Ongoing")
                .imageUrl("https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80")
                .build(),

            Project.builder()
                .name("DHA Residencia Villas")
                .nameAr("فلل ريزيدنسيا DHA")
                .description("Exclusive gated community of 200 luxury villas spread across 150 acres. Each villa features a private garden, swimming pool, and state-of-the-art security systems with smart entry gates.")
                .descriptionAr("مجمع سكني حصري مغلق يضم 200 فيلا فاخرة تمتد على مساحة 150 فداناً. تتميز كل فيلا بحديقة خاصة وحمام سباحة وأنظمة أمنية متطورة مع بوابات دخول ذكية.")
                .location("DHA Phase 6, Islamabad")
                .locationAr("مرحلة 6 DHA، إسلام آباد")
                .status("Completed")
                .imageUrl("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80")
                .build(),

            Project.builder()
                .name("Gulberg Heights")
                .nameAr("غلبرغ هايتس")
                .description("Modern high-rise commercial and residential complex in the heart of Gulberg. Features ground-floor retail, 5 floors of premium offices, and 20 floors of luxury apartments with rooftop amenities.")
                .descriptionAr("مجمع متكامل من الطراز الرفيع يجمع بين المساحات التجارية والسكنية في قلب غلبرغ. يضم طوابق أرضية للتجزئة وخمسة طوابق من المكاتب الفاخرة وعشرين طابقاً من الشقق الراقية مع مرافق متكاملة على السطح.")
                .location("Gulberg III, Lahore")
                .locationAr("غلبرغ الثالثة، لاهور")
                .status("Ongoing")
                .imageUrl("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80")
                .build(),

            Project.builder()
                .name("Emaar Canyon Views")
                .nameAr("إيمار كانيون فيوز")
                .description("Inspired by Dubai's finest, Canyon Views offers 3 & 4-bed townhouses with lush green belts, a central park, international school, and a fully equipped sports complex within the community.")
                .descriptionAr("مستوحى من أرقى مشاريع دبي، يقدم كانيون فيوز تاون هاوسات بثلاث وأربع غرف نوم محاطة بمساحات خضراء شاسعة وحديقة مركزية ومدرسة دولية ومجمع رياضي متكامل داخل المجمع السكني.")
                .location("Emaar Business District, Islamabad")
                .locationAr("مركز إيمار التجاري، إسلام آباد")
                .status("Completed")
                .imageUrl("https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80")
                .build(),

            Project.builder()
                .name("Naya Nazimabad Business Hub")
                .nameAr("مركز نيا ناظم آباد التجاري")
                .description("A premium commercial development offering modern office spaces, co-working zones, retail outlets and a food court. Designed for startups and established enterprises seeking a prestigious address.")
                .descriptionAr("تطوير تجاري راقٍ يوفر مساحات مكتبية عصرية ومناطق عمل مشترك ومحلات تجارية وصالة طعام متنوعة. مصمم خصيصاً للشركات الناشئة والمؤسسات الراسخة الباحثة عن عنوان تجاري مرموق.")
                .location("Naya Nazimabad, Karachi")
                .locationAr("نيا ناظم آباد، كراتشي")
                .status("Ongoing")
                .imageUrl("https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80")
                .build(),

            Project.builder()
                .name("Lake City Golf Estates")
                .nameAr("مجمع غولف ليك سيتي")
                .description("Pakistan's most prestigious golf community featuring 450 luxury plots and villas overlooking an 18-hole championship golf course, lake views, and a 5-star clubhouse experience.")
                .descriptionAr("أكثر مجمعات الغولف هيبةً في باكستان، يضم 450 قطعة أرض وفيلا فاخرة تطل على ملعب غولف بطولي من 18 حفرة، مع إطلالات ساحرة على البحيرة وتجربة نادٍ من فئة خمس نجوم.")
                .location("Lake City, Lahore")
                .locationAr("مدينة البحيرة، لاهور")
                .status("Completed")
                .imageUrl("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80")
                .build(),

            Project.builder()
                .name("Capital Smart City Highlands")
                .nameAr("هايلاندز المدينة الذكية")
                .description("An eco-smart residential sector with solar-powered homes, electric vehicle charging stations, smart street lighting, and a dedicated tech park — setting a new benchmark for sustainable living in Pakistan.")
                .descriptionAr("قطاع سكني بيئي ذكي يضم منازل تعمل بالطاقة الشمسية ومحطات شحن للسيارات الكهربائية وإضاءة شوارع ذكية وحديقة تقنية متخصصة، ليضع معياراً جديداً للحياة المستدامة في باكستان.")
                .location("Capital Smart City, Rawalpindi")
                .locationAr("المدينة الذكية، روالبندي")
                .status("Ongoing")
                .imageUrl("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80")
                .build(),

            Project.builder()
                .name("Sea View Grand Residences")
                .nameAr("سي فيو غراند ريزيدنسز")
                .description("Beachfront luxury apartments on Karachi's most coveted coastline. Each unit offers unobstructed Arabian Sea views, private beach access, and resort-style amenities including a spa and yacht marina.")
                .descriptionAr("شقق فاخرة على الواجهة البحرية في أكثر مناطق كراتشي استحساناً. تتمتع كل وحدة بإطلالة مفتوحة على بحر العرب وإمكانية وصول خاصة إلى الشاطئ ومرافق منتجعية راقية تشمل سبا ومرسى للقوارب.")
                .location("Clifton Block 4, Karachi")
                .locationAr("كليفتون بلوك 4، كراتشي")
                .status("Completed")
                .imageUrl("https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80")
                .build()
        );

        projectRepository.saveAll(projects);
        System.out.println("✅ Mock projects seeded successfully.");
    }
}
