// src/assets/assets.js

// 1. Import all your local SVG files
// Make sure these files exist in your src/assets folder
import general_physician from './General_physician.svg'
import gynecologist from './Gynecologist.svg'
import dermatologist from './Dermatologist.svg'
import pediatrician from './Pediatrician.svg'
import neurologist from './Neurologist.svg'
import gastroenterologist from './Gastroenterologist.svg'
import cardiologist from './Cardiologist.svg' // Ensure you have this file
import orthopedics from './Orthopedics.svg'
import ent_specialist from './ENT_specialist.svg'
import dentist from './Dentist.svg'
import ophthalmologist from './Ophthalmologist.svg'
import physiotherapist from './Physiotherapist.svg'

// 2. Export the Departments Array using the imported variables
export const departments = [
    {
        dep: "General Physician",
        img: general_physician
    },
    {
        dep: "Gynecologist",
        img: gynecologist
    },
    {
        dep: "Dermatologist",
        img: dermatologist
    },
    {
        dep: "Pediatrician",
        img: pediatrician
    },
    {
        dep: "Neurologist",
        img: neurologist
    },
    {
        dep: "Gastroenterologist",
        img: gastroenterologist
    },
    {
        dep: "Cardiologist",
        img: cardiologist
    },
    {
        dep: "Orthopedics",
        img: orthopedics
    },
    {
        dep: "ENT Specialist",
        img: ent_specialist
    },
    {
        dep: "Dentist",
        img: dentist
    },
    {
        dep: "Ophthalmologist",
        img: ophthalmologist
    },
    {
        dep: "Physiotherapist",
        img: physiotherapist
    }
];