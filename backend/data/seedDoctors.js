import { pool } from '../config/db.js';

const doctors = [
    {
        name: "Dr. Rachel James", specialist: "General Physician", img: "image1.png",
        about: "Dr. Rachel James is a highly experienced General Physician dedicated to providing comprehensive preventative care and treating a wide array of acute illnesses."
    },
    {
        name: "Dr. Emily Larson", specialist: "General Physician", img: "image2.png",
        about: "Dr. Emily Larson focuses on holistic patient wellness, offering routine check-ups and personalized treatment plans for chronic conditions."
    },
    {
        name: "Dr. Maria Anderson", specialist: "General Physician", img: "image3.png",
        about: "With over 15 years of experience, Dr. Maria Anderson is known for her diagnostic accuracy and compassionate approach to primary care."
    },
    {
        name: "Dr. Sarah Johnson", specialist: "General Physician", img: "image4.png",
        about: "Dr. Sarah Johnson specializes in adult medicine, emphasizing lifestyle modifications and early detection of systemic diseases."
    },
    {
        name: "Dr. Willow Turner", specialist: "General Physician", img: "image5.png",
        about: "Dr. Willow Turner provides expert medical guidance for families, ensuring continuity of care and overall health optimization."
    },
    {
        name: "Dr. Robert Lee", specialist: "Gynecologist", img: "image6.png",
        about: "Dr. Rebecca Lee is a leading Gynecologist specializing in women's reproductive health, prenatal care, and minimally invasive surgeries."
    },
    {
        name: "Dr. Karen Miller", specialist: "Gynecologist", img: "image7.png",
        about: "Dr. Karen Miller brings decades of expertise in maternal-fetal medicine and comprehensive family planning services."
    },
    {
        name: "Dr. Michelle Davis", specialist: "Gynecologist", img: "image8.png",
        about: "Known for her empathetic care, Dr. Michelle Davis focuses on adolescent gynecology and menopausal health management."
    },
    {
        name: "Dr. Patricia Wilson", specialist: "Gynecologist", img: "image9.png",
        about: "Dr. Patricia Wilson is a board-certified expert in high-risk pregnancies and advanced gynecological therapeutics."
    },
    {
        name: "Dr. Jennifer Thomas", specialist: "Gynecologist", img: "image10.png",
        about: "Dr. Jennifer Thomas provides evidence-based care for women of all ages, prioritizing comfort, education, and long-term health."
    },
    {
        name: "Dr. Christina Evans", specialist: "Dermatologist", img: "image11.png",
        about: "Dr. Christina Evans is an expert in clinical and cosmetic dermatology, specializing in acne treatment and skin cancer screening."
    },
    {
        name: "Dr. Jessica Taylor", specialist: "Dermatologist", img: "image12.png",
        about: "Dr. Jessica Taylor utilizes the latest laser technologies and aesthetic procedures to help patients achieve radiant, healthy skin."
    },
    {
        name: "Dr. Danielle Harris", specialist: "Dermatologist", img: "image13.png",
        about: "Dr. Danielle Harris has extensive experience treating chronic skin conditions such as eczema, psoriasis, and severe dermatitis."
    },
    {
        name: "Dr. Brianna Lewis", specialist: "Dermatologist", img: "image14.png",
        about: "Dr. Brianna Lewis is a renowned dermatologic surgeon specializing in Mohs surgery and complex skin lesion removals."
    },
    {
        name: "Dr. Elizabeth Clark", specialist: "Dermatologist", img: "image15.png",
        about: "Dr. Elizabeth Clark focuses on pediatric dermatology and customized skincare routines for sensitive skin types."
    },
    {
        name: "Dr. Keira Walker", specialist: "Pediatrician", img: "image16.png",
        about: "Dr. Keira Walker is a gentle and caring Pediatrician dedicated to the healthy development of infants, children, and adolescents."
    },
    {
        name: "Dr. Amanda Hall", specialist: "Pediatrician", img: "image17.png",
        about: "Dr. Amanda Hall specializes in early childhood vaccinations, nutritional guidance, and monitoring developmental milestones."
    },
    {
        name: "Dr. Jasmine Allen", specialist: "Pediatrician", img: "image18.png",
        about: "Dr. Jasmine Allen is known for making visits fun and stress-free for children while providing top-tier medical care."
    },
    {
        name: "Dr. Mary Young", specialist: "Pediatrician", img: "image19.png",
        about: "Dr. Mary Young excels in treating childhood asthma, allergies, and seasonal infections with a family-centered approach."
    },
    {
        name: "Dr. Roberta King", specialist: "Neurologist", img: "image20.png",
        about: "Dr. Roberta King is a leading Neurologist with deep expertise in managing migraines, epilepsy, and neurodegenerative disorders."
    },
    {
        name: "Dr. Linda Wright", specialist: "Neurologist", img: "image21.png",
        about: "Dr. Linda Wright utilizes advanced diagnostic imaging to treat stroke patients and complex central nervous system diseases."
    },
    {
        name: "Dr. Sophia Lopez", specialist: "Neurologist", img: "image22.png",
        about: "Dr. Sophia Lopez specializes in movement disorders, including Parkinson's disease and essential tremors."
    },
    {
        name: "Dr. Barbara Hill", specialist: "Neurologist", img: "image23.png",
        about: "Dr. Barbara Hill is renowned for her research in cognitive neurology and compassionate care for Alzheimer's patients."
    },
    {
        name: "Dr. Tara Scott", specialist: "Gastroenterologist", img: "image24.png",
        about: "Dr. Tara Scott provides expert care in digestive health, specializing in endoscopy, colonoscopy, and IBS management."
    },
    {
        name: "Dr. Susan Green", specialist: "Gastroenterologist", img: "image25.png",
        about: "Dr. Susan Green focuses on liver diseases, inflammatory bowel disease, and advanced gastrointestinal therapeutics."
    },
    {
        name: "Dr. Julia Adams", specialist: "Gastroenterologist", img: "image26.png",
        about: "Dr. Julia Adams is a skilled diagnostician dedicated to resolving acid reflux, ulcers, and chronic stomach pain."
    },
    {
        name: "Dr. Margaret Baker", specialist: "Gastroenterologist", img: "image27.png",
        about: "Dr. Margaret Baker integrates nutritional counseling with medical treatments to optimize her patients' gut health."
    },
    {
        name: "Dr. Elena Gonzalez", specialist: "Cardiologist", img: "image28.png",
        about: "Dr. Elena Gonzalez is a top-rated Cardiologist specializing in heart failure management, arrhythmias, and preventive cardiology."
    },
    {
        name: "Dr. Dorothy Nelson", specialist: "Cardiologist", img: "image29.png",
        about: "Dr. Dorothy Nelson focuses on women's cardiovascular health, hypertension, and non-invasive cardiac imaging."
    },
    {
        name: "Dr. Paula Carter", specialist: "Cardiologist", img: "image30.png",
        about: "Dr. Paula Carter performs advanced interventional cardiology procedures, including angioplasty and stent placements."
    },
    {
        name: "Dr. Helen Mitchell", specialist: "Cardiologist", img: "image31.png",
        about: "Dr. Helen Mitchell is dedicated to cardiac rehabilitation and helping patients recover strong after heart attacks."
    },
    {
        name: "Dr. Georgia Roberts", specialist: "Cardiologist", img: "image32.png",
        about: "Dr. Georgia Roberts is an expert in structural heart disease and managing complex cholesterol disorders."
    },
    {
        name: "Dr. Kendra Phillips", specialist: "Orthopedics", img: "image33.png",
        about: "Dr. Kendra Phillips specializes in sports injuries, arthroscopic surgery, and full joint replacements."
    },
    {
        name: "Dr. Donna Campbell", specialist: "Orthopedics", img: "image34.png",
        about: "Dr. Donna Campbell provides comprehensive care for spinal disorders, bone fractures, and degenerative joint diseases."
    },
    {
        name: "Dr. Stephanie Parker", specialist: "Orthopedics", img: "image35.png",
        about: "Dr. Stephanie Parker is a renowned orthopedic surgeon focused on minimally invasive techniques for faster patient recovery."
    },
    {
        name: "Dr. Carol Evans", specialist: "Orthopedics", img: "image36.png",
        about: "Dr. Carol Evans excels in pediatric orthopedics, treating scoliosis and congenital bone deformities."
    },
    {
        name: "Dr. Donna Edwards", specialist: "ENT Specialist", img: "image37.png",
        about: "Dr. Donna Edwards is an Ear, Nose, and Throat specialist expert in sinus surgeries, hearing loss, and sleep apnea treatments."
    },
    {
        name: "Dr. Ruth Collins", specialist: "ENT Specialist", img: "image38.png",
        about: "Dr. Ruth Collins focuses on vocal cord disorders, tonsillitis, and advanced treatments for chronic ear infections."
    },
    {
        name: "Dr. Rose Stewart", specialist: "ENT Specialist", img: "image39.png",
        about: "Dr. Rose Stewart is highly skilled in head and neck surgeries and resolving complex allergy-induced ENT issues."
    },
    {
        name: "Dr. Sharon Sanchez", specialist: "ENT Specialist", img: "image40.png",
        about: "Dr. Sharon Sanchez provides excellent pediatric ENT care, ensuring children can hear, breathe, and sleep comfortably."
    },
    {
        name: "Dr. Anita Morris", specialist: "Dentist", img: "image41.png",
        about: "Dr. Anita Morris provides state-of-the-art general and cosmetic dentistry, including veneers, implants, and whitening."
    },
    {
        name: "Dr. Deborah Rogers", specialist: "Dentist", img: "image42.png",
        about: "Dr. Deborah Rogers is a family dentist passionate about oral hygiene education and pain-free root canal therapies."
    },
    {
        name: "Dr. Grace Reed", specialist: "Dentist", img: "image43.png",
        about: "Dr. Grace Reed specializes in orthodontics and invisible aligners, helping patients achieve their perfect smile."
    },
    {
        name: "Dr. Janet Cook", specialist: "Dentist", img: "image44.png",
        about: "Dr. Janet Cook excels in pediatric dentistry, creating a welcoming and calm environment for children's dental care."
    },
    {
        name: "Dr. Rachel Morgan", specialist: "Ophthalmologist", img: "image45.png",
        about: "Dr. Rachel Morgan is a board-certified Ophthalmologist specializing in LASIK, cataract surgery, and glaucoma management."
    },
    {
        name: "Dr. Carolyn Bell", specialist: "Ophthalmologist", img: "image46.png",
        about: "Dr. Carolyn Bell provides comprehensive eye exams and advanced treatments for macular degeneration and diabetic retinopathy."
    },
    {
        name: "Dr. Jessica Murphy", specialist: "Ophthalmologist", img: "image47.png",
        about: "Dr. Jessica Murphy is an expert in corneal transplants and treating severe dry eye syndrome."
    },
    {
        name: "Dr. Christine Bailey", specialist: "Ophthalmologist", img: "image48.png",
        about: "Dr. Christine Bailey is dedicated to pediatric ophthalmology, treating strabismus and correcting childhood vision issues."
    },
    {
        name: "Dr. Riya Rivera", specialist: "Ophthalmologist", img: "image49.png",
        about: "Dr. Riya Rivera utilizes cutting-edge laser therapies to correct refractive errors and restore optimal vision."
    },
    {
        name: "Dr. Denise Cooper", specialist: "Physiotherapist", img: "image50.png",
        about: "Dr. Denise Cooper specializes in sports rehabilitation, helping athletes recover safely and rapidly from severe injuries."
    },
    {
        name: "Dr. Virginia Richardson", specialist: "Physiotherapist", img: "image51.png",
        about: "Dr. Virginia Richardson provides targeted physical therapy for chronic back pain, posture correction, and mobility issues."
    },
    {
        name: "Dr. Wanda Cox", specialist: "Physiotherapist", img: "image52.png",
        about: "Dr. Wanda Cox focuses on post-surgical rehabilitation, ensuring patients regain full strength and range of motion."
    },
    {
        name: "Dr. Catherine Howard", specialist: "Physiotherapist", img: "image53.png",
        about: "Dr. Catherine Howard is highly skilled in neuro-physiotherapy, assisting stroke survivors and those with nerve damage."
    },
    {
        name: "Dr. Hailey Ward", specialist: "Physiotherapist", img: "image54.png",
        about: "Dr. Hailey Ward uses manual therapy and personalized exercise plans to treat arthritis and age-related physical decline."
    }
];

const seedDB = async () => {
    try {
        console.log("Starting to seed database with doctors...");
        
        // Clear existing data to avoid duplicates during testing
        await pool.query('DELETE FROM doctors');
        
        for (const doctor of doctors) {
            const query = `
                INSERT INTO doctors (name, specialty, degree, experience, about, fees, image_url, address, available)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            `;
            // Add some default values for fields not in the frontend list
            const degree = 'MBBS, MD';
            const experience = '10 Years';
            const fees = 150;
            const address = JSON.stringify({ line1: "123 Medical Avenue", line2: "Health City" });
            const imageUrl = `http://localhost:${process.env.PORT || 5000}/images/${doctor.img}`;
            
            const values = [doctor.name, doctor.specialist, degree, experience, doctor.about, fees, imageUrl, address, true];
            await pool.query(query, values);
        }
        
        console.log(`Successfully seeded ${doctors.length} doctors into the database!`);
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await pool.end();
        process.exit();
    }
};

seedDB();
