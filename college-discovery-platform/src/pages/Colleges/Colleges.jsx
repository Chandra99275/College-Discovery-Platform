import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Colleges.css";

// ======================================================
// COLLEGE DATA
// ======================================================

export const colleges = [
  // ==================== ENGINEERING ====================

  {
    id: 1,
    name: "Marri Laxman Reddy Institute of Technology",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.5,
    fees: "₹1.20 Lakh / Year",
    averagePackage: "₹6.5 LPA",
    highestPackage: "₹32 LPA",
    placementRate: "92%",
    established: 2005,
    students: "5000+",
    campus: "65 Acres",
    courses: 25,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=900&q=80",
    about:
      "MLRIT is one of the leading engineering colleges in Hyderabad offering quality education, research facilities and excellent placement opportunities.",
  },

  {
    id: 2,
    name: "Vasavi College of Engineering",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.6,
    fees: "₹1.10 Lakh / Year",
    averagePackage: "₹7.0 LPA",
    highestPackage: "₹38 LPA",
    placementRate: "94%",
    established: 1981,
    students: "4500+",
    campus: "13 Acres",
    courses: 20,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1592066575517-58df903152f2?auto=format&fit=crop&w=900&q=80",
    about:
      "Vasavi College is an autonomous engineering institution known for academics, placements and innovation labs.",
  },

  {
    id: 3,
    name: "Chaitanya Bharathi Institute of Technology",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.7,
    fees: "₹1.50 Lakh / Year",
    averagePackage: "₹8.5 LPA",
    highestPackage: "₹52 LPA",
    placementRate: "96%",
    established: 1979,
    students: "6500+",
    campus: "50 Acres",
    courses: 30,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=900&q=80",
    about:
      "CBIT is among Telangana's top engineering colleges with excellent placement records and industry collaborations.",
  },

  {
    id: 4,
    name: "CVR College of Engineering",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.4,
    fees: "₹1.25 Lakh / Year",
    averagePackage: "₹7.2 LPA",
    highestPackage: "₹28 LPA",
    placementRate: "90%",
    established: 2001,
    students: "5500+",
    campus: "35 Acres",
    courses: 22,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&w=900&q=80",
    about:
      "CVR College is known for its strong placement ecosystem, research centers and modern laboratories.",
  },

  {
    id: 5,
    name: "Gokaraju Rangaraju Institute of Engineering & Technology",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.5,
    fees: "₹1.15 Lakh / Year",
    averagePackage: "₹7.5 LPA",
    highestPackage: "₹44 LPA",
    placementRate: "93%",
    established: 1997,
    students: "7000+",
    campus: "24 Acres",
    courses: 24,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=900&q=80",
    about:
      "GRIET is a reputed engineering college with NBA accreditation and excellent placement performance.",
  },

  {
    id: 6,
    name: "Vardhaman College of Engineering",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.3,
    fees: "₹1.05 Lakh / Year",
    averagePackage: "₹6.0 LPA",
    highestPackage: "₹20 LPA",
    placementRate: "89%",
    established: 1999,
    students: "4500+",
    campus: "28 Acres",
    courses: 18,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1730497985274-504ffac6cc66?auto=format&fit=crop&w=900&q=80",
    about:
      "Vardhaman College offers undergraduate and postgraduate engineering programs with strong industry connections.",
  },

  {
    id: 7,
    name: "Malla Reddy Engineering College",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.2,
    fees: "₹95,000 / Year",
    averagePackage: "₹5.5 LPA",
    highestPackage: "₹18 LPA",
    placementRate: "86%",
    established: 2002,
    students: "6000+",
    campus: "30 Acres",
    courses: 20,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?auto=format&fit=crop&w=900&q=80",
    about:
      "MREC is one of Hyderabad's popular engineering colleges with good placements and infrastructure.",
  },

  {
    id: 8,
    name: "Anurag University",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.5,
    fees: "₹1.45 Lakh / Year",
    averagePackage: "₹7.8 LPA",
    highestPackage: "₹28 LPA",
    placementRate: "91%",
    established: 2020,
    students: "8000+",
    campus: "100 Acres",
    courses: 35,
    entranceExam: "TS EAMCET / ANURAG CET",
    image:
      "https://images.unsplash.com/photo-1695943139579-e6b89bf71858?auto=format&fit=crop&w=900&q=80",
    about:
      "Anurag University offers engineering, management, pharmacy and medical sciences with world-class infrastructure.",
  },

  {
    id: 9,
    name: "JNTUH College of Engineering",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.8,
    fees: "₹60,000 / Year",
    averagePackage: "₹9.5 LPA",
    highestPackage: "₹58 LPA",
    placementRate: "97%",
    established: 1965,
    students: "8000+",
    campus: "89 Acres",
    courses: 40,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1641160616553-a9d21a846e49?auto=format&fit=crop&w=900&q=80",
    about:
      "JNTUH College of Engineering is one of Telangana's highest-ranked government engineering colleges.",
  },

  {
    id: 10,
    name: "Mahindra University",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.6,
    fees: "₹4.00 Lakh / Year",
    averagePackage: "₹12 LPA",
    highestPackage: "₹63 LPA",
    placementRate: "96%",
    established: 2020,
    students: "3500+",
    campus: "130 Acres",
    courses: 28,
    entranceExam: "JEE / SAT / MU Entrance",
    image:
      "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?auto=format&fit=crop&w=900&q=80",
    about:
      "Mahindra University is a private university known for international collaborations and high placement packages.",
  },

  {
    id: 11,
    name: "NIT Warangal",
    location: "Warangal, Telangana",
    city: "Warangal",
    category: "Engineering",
    rating: 4.9,
    fees: "₹1.70 Lakh / Year",
    averagePackage: "₹18 LPA",
    highestPackage: "₹88 LPA",
    placementRate: "98%",
    established: 1959,
    students: "9000+",
    campus: "248 Acres",
    courses: 35,
    entranceExam: "JEE Main",
    image:
      "https://images.unsplash.com/photo-1622470190232-81df3782484b?auto=format&fit=crop&w=900&q=80",
    about:
      "NIT Warangal is among India's top National Institutes of Technology with outstanding placements and research.",
  },

  {
    id: 12,
    name: "Kakatiya University",
    location: "Warangal, Telangana",
    city: "Warangal",
    category: "Engineering",
    rating: 4.3,
    fees: "₹75,000 / Year",
    averagePackage: "₹5.8 LPA",
    highestPackage: "₹15 LPA",
    placementRate: "82%",
    established: 1976,
    students: "10000+",
    campus: "650 Acres",
    courses: 60,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?auto=format&fit=crop&w=900&q=80",
    about:
      "Kakatiya University is a government university offering engineering, science, management and humanities.",
  },

  {
    id: 13,
    name: "VNR VJIET",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.7,
    fees: "₹1.35 Lakh / Year",
    averagePackage: "₹8.8 LPA",
    highestPackage: "₹46 LPA",
    placementRate: "95%",
    established: 1995,
    students: "6500+",
    campus: "25 Acres",
    courses: 24,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
    about:
      "VNR VJIET is an autonomous engineering college with strong placements and innovation centers.",
  },

  {
    id: 14,
    name: "Sreenidhi Institute of Science & Technology",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.5,
    fees: "₹1.30 Lakh / Year",
    averagePackage: "₹7.6 LPA",
    highestPackage: "₹30 LPA",
    placementRate: "92%",
    established: 1997,
    students: "5000+",
    campus: "33 Acres",
    courses: 20,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=900&q=80",
    about:
      "SNIST offers quality engineering education with excellent campus facilities and placements.",
  },

  {
    id: 15,
    name: "Muffakham Jah College of Engineering",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.4,
    fees: "₹1.10 Lakh / Year",
    averagePackage: "₹6.8 LPA",
    highestPackage: "₹26 LPA",
    placementRate: "90%",
    established: 1980,
    students: "4000+",
    campus: "20 Acres",
    courses: 18,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1592066575517-58df903152f2?auto=format&fit=crop&w=900&q=80",
    about:
      "MJCET is a well-known minority engineering college in Hyderabad with good academic standards.",
  },

  {
    id: 16,
    name: "Institute of Aeronautical Engineering",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.3,
    fees: "₹1.20 Lakh / Year",
    averagePackage: "₹6.5 LPA",
    highestPackage: "₹24 LPA",
    placementRate: "88%",
    established: 2000,
    students: "5000+",
    campus: "27 Acres",
    courses: 22,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=900&q=80",
    about:
      "IARE is known for aerospace, CSE and AI specializations with modern laboratories.",
  },

  {
    id: 17,
    name: "CMR Technical Campus",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.2,
    fees: "₹1.00 Lakh / Year",
    averagePackage: "₹5.7 LPA",
    highestPackage: "₹18 LPA",
    placementRate: "84%",
    established: 2009,
    students: "4500+",
    campus: "18 Acres",
    courses: 18,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&w=900&q=80",
    about:
      "CMRTC provides engineering education with industry-oriented curriculum and placement training.",
  },

  {
    id: 18,
    name: "CMR Engineering College",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.2,
    fees: "₹1.05 Lakh / Year",
    averagePackage: "₹5.9 LPA",
    highestPackage: "₹19 LPA",
    placementRate: "85%",
    established: 2010,
    students: "4000+",
    campus: "15 Acres",
    courses: 18,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=900&q=80",
    about:
      "CMREC is an autonomous engineering college with focus on innovation and entrepreneurship.",
  },

  {
    id: 19,
    name: "ACE Engineering College",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.1,
    fees: "₹95,000 / Year",
    averagePackage: "₹5.2 LPA",
    highestPackage: "₹16 LPA",
    placementRate: "82%",
    established: 2007,
    students: "3500+",
    campus: "10 Acres",
    courses: 16,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1730497985274-504ffac6cc66?auto=format&fit=crop&w=900&q=80",
    about:
      "ACE Engineering College provides undergraduate engineering programs with placement support.",
  },

  {
    id: 20,
    name: "BVRIT Hyderabad College of Engineering for Women",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.6,
    fees: "₹1.30 Lakh / Year",
    averagePackage: "₹8.2 LPA",
    highestPackage: "₹40 LPA",
    placementRate: "95%",
    established: 2012,
    students: "4000+",
    campus: "15 Acres",
    courses: 18,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?auto=format&fit=crop&w=900&q=80",
    about:
      "BVRIT Hyderabad is one of the top women's engineering colleges in Telangana with excellent placements.",
  },

  // ==================== MEDICAL ====================

  {
    id: 21,
    name: "Osmania Medical College",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Medical",
    rating: 4.8,
    fees: "₹55,000 / Year",
    averagePackage: "Internship + PG Opportunities",
    highestPackage: "N/A",
    placementRate: "100%",
    established: 1846,
    students: "2500+",
    campus: "Historic Campus",
    courses: 18,
    entranceExam: "NEET UG",
    image:
      "https://images.unsplash.com/photo-1695943139579-e6b89bf71858?auto=format&fit=crop&w=900&q=80",
    about:
      "Osmania Medical College is one of India's oldest and most prestigious government medical colleges.",
  },

  {
    id: 22,
    name: "Gandhi Medical College",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Medical",
    rating: 4.7,
    fees: "₹60,000 / Year",
    averagePackage: "Internship",
    highestPackage: "N/A",
    placementRate: "100%",
    established: 1954,
    students: "2200+",
    campus: "Teaching Hospital Campus",
    courses: 20,
    entranceExam: "NEET UG",
    image:
      "https://images.unsplash.com/photo-1641160616553-a9d21a846e49?auto=format&fit=crop&w=900&q=80",
    about:
      "Gandhi Medical College is a premier government medical institution affiliated with Gandhi Hospital.",
  },

  {
    id: 23,
    name: "KIMS Medical College",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Medical",
    rating: 4.5,
    fees: "₹12 Lakh / Year",
    averagePackage: "Hospital Residency",
    highestPackage: "N/A",
    placementRate: "100%",
    established: 2004,
    students: "3000+",
    campus: "Hospital Campus",
    courses: 15,
    entranceExam: "NEET UG",
    image:
      "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?auto=format&fit=crop&w=900&q=80",
    about:
      "KIMS Medical College provides advanced healthcare education with a multi-speciality hospital.",
  },

  {
    id: 24,
    name: "Apollo Institute of Medical Sciences",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Medical",
    rating: 4.4,
    fees: "₹15 Lakh / Year",
    averagePackage: "Hospital Placement",
    highestPackage: "N/A",
    placementRate: "100%",
    established: 2012,
    students: "1800+",
    campus: "Hospital Campus",
    courses: 14,
    entranceExam: "NEET UG",
    image:
      "https://images.unsplash.com/photo-1622470190232-81df3782484b?auto=format&fit=crop&w=900&q=80",
    about:
      "Apollo Medical College is supported by Apollo Hospitals and provides advanced clinical exposure.",
  },

  {
    id: 25,
    name: "MNR Medical College",
    location: "Sangareddy, Telangana",
    city: "Sangareddy",
    category: "Medical",
    rating: 4.3,
    fees: "₹11 Lakh / Year",
    averagePackage: "Clinical Training",
    highestPackage: "N/A",
    placementRate: "100%",
    established: 2002,
    students: "2000+",
    campus: "Medical Campus",
    courses: 12,
    entranceExam: "NEET UG",
    image:
      "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?auto=format&fit=crop&w=900&q=80",
    about:
      "MNR Medical College offers MBBS and postgraduate medical education with teaching hospital facilities.",
  },

  // ==================== MANAGEMENT ====================

  {
    id: 26,
    name: "ICFAI Business School",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Management",
    rating: 4.6,
    fees: "₹8 Lakh / Program",
    averagePackage: "₹9 LPA",
    highestPackage: "₹22 LPA",
    placementRate: "92%",
    established: 1995,
    students: "3000+",
    campus: "90 Acres",
    courses: 10,
    entranceExam: "IBSAT / CAT / XAT",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
    about:
      "IBS Hyderabad is among India's leading MBA colleges with excellent corporate connections.",
  },

  {
    id: 27,
    name: "Woxsen University",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Management",
    rating: 4.5,
    fees: "₹12 Lakh / Program",
    averagePackage: "₹10 LPA",
    highestPackage: "₹24 LPA",
    placementRate: "90%",
    established: 2014,
    students: "2500+",
    campus: "200 Acres",
    courses: 18,
    entranceExam: "CAT / XAT / WAT",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=900&q=80",
    about:
      "Woxsen University is a globally recognized private university with international MBA programs.",
  },

  {
    id: 28,
    name: "Institute of Public Enterprise",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Management",
    rating: 4.4,
    fees: "₹7 Lakh / Program",
    averagePackage: "₹8.5 LPA",
    highestPackage: "₹20 LPA",
    placementRate: "88%",
    established: 1964,
    students: "1800+",
    campus: "25 Acres",
    courses: 12,
    entranceExam: "CAT / XAT / MAT",
    image:
      "https://images.unsplash.com/photo-1592066575517-58df903152f2?auto=format&fit=crop&w=900&q=80",
    about:
      "IPE Hyderabad is known for PGDM programs and corporate collaborations.",
  },

  {
    id: 29,
    name: "University of Hyderabad School of Management",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Management",
    rating: 4.7,
    fees: "₹2 Lakh / Program",
    averagePackage: "₹9.5 LPA",
    highestPackage: "₹23 LPA",
    placementRate: "94%",
    established: 1974,
    students: "1500+",
    campus: "2300 Acres",
    courses: 10,
    entranceExam: "CAT",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=900&q=80",
    about:
      "The School of Management Studies at UoH offers MBA and PhD programs with strong academic reputation.",
  },

  {
    id: 30,
    name: "IMT Hyderabad",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Management",
    rating: 4.5,
    fees: "₹9 Lakh / Program",
    averagePackage: "₹10 LPA",
    highestPackage: "₹24 LPA",
    placementRate: "91%",
    established: 2011,
    students: "1200+",
    campus: "30 Acres",
    courses: 8,
    entranceExam: "CAT / XAT / GMAT",
    image:
      "https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&w=900&q=80",
    about:
      "IMT Hyderabad is a leading management institute offering PGDM with strong placements.",
  },

  // ==================== SCIENCE ====================

  {
    id: 31,
    name: "University of Hyderabad",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Science",
    rating: 4.8,
    fees: "₹50,000 / Year",
    averagePackage: "₹8 LPA",
    highestPackage: "₹30 LPA",
    placementRate: "90%",
    established: 1974,
    students: "9000+",
    campus: "2300 Acres",
    courses: 70,
    entranceExam: "CUET PG",
    image:
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=900&q=80",
    about:
      "University of Hyderabad is one of India's top central universities with world-class research facilities.",
  },

  {
    id: 32,
    name: "St. Francis College for Women",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Science",
    rating: 4.5,
    fees: "₹80,000 / Year",
    averagePackage: "₹4 LPA",
    highestPackage: "₹10 LPA",
    placementRate: "82%",
    established: 1959,
    students: "6000+",
    campus: "15 Acres",
    courses: 35,
    entranceExam: "Merit Based",
    image:
      "https://images.unsplash.com/photo-1730497985274-504ffac6cc66?auto=format&fit=crop&w=900&q=80",
    about:
      "St. Francis College is a reputed women's college offering science, commerce and arts programs.",
  },

  {
    id: 33,
    name: "Loyola Academy",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Science",
    rating: 4.6,
    fees: "₹90,000 / Year",
    averagePackage: "₹4.5 LPA",
    highestPackage: "₹12 LPA",
    placementRate: "85%",
    established: 1976,
    students: "5500+",
    campus: "20 Acres",
    courses: 40,
    entranceExam: "Merit Based",
    image:
      "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?auto=format&fit=crop&w=900&q=80",
    about:
      "Loyola Academy is an autonomous college known for science and commerce education.",
  },

  {
    id: 34,
    name: "Nizam College",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Science",
    rating: 4.3,
    fees: "₹45,000 / Year",
    averagePackage: "₹3.8 LPA",
    highestPackage: "₹8 LPA",
    placementRate: "78%",
    established: 1887,
    students: "4000+",
    campus: "Historic Campus",
    courses: 25,
    entranceExam: "Merit Based",
    image:
      "https://images.unsplash.com/photo-1695943139579-e6b89bf71858?auto=format&fit=crop&w=900&q=80",
    about:
      "Nizam College is one of Hyderabad's oldest colleges affiliated with Osmania University.",
  },

  {
    id: 35,
    name: "St. Ann's College for Women",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Science",
    rating: 4.4,
    fees: "₹70,000 / Year",
    averagePackage: "₹4 LPA",
    highestPackage: "₹9 LPA",
    placementRate: "80%",
    established: 1981,
    students: "5000+",
    campus: "18 Acres",
    courses: 30,
    entranceExam: "Merit Based",
    image:
      "https://images.unsplash.com/photo-1641160616553-a9d21a846e49?auto=format&fit=crop&w=900&q=80",
    about:
      "St. Ann's College provides undergraduate and postgraduate science and commerce education.",
  },

  // ==================== DIPLOMA ====================

  {
    id: 36,
    name: "Government Polytechnic Hyderabad",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Diploma",
    rating: 4.2,
    fees: "₹25,000 / Year",
    averagePackage: "₹3.5 LPA",
    highestPackage: "₹8 LPA",
    placementRate: "78%",
    established: 1923,
    students: "3000+",
    campus: "Government Campus",
    courses: 15,
    entranceExam: "POLYCET",
    image:
      "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?auto=format&fit=crop&w=900&q=80",
    about:
      "Government Polytechnic Hyderabad offers diploma programs in engineering and technology.",
  },

  {
    id: 37,
    name: "TRR College of Technology",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Diploma",
    rating: 4.0,
    fees: "₹55,000 / Year",
    averagePackage: "₹3.8 LPA",
    highestPackage: "₹8 LPA",
    placementRate: "76%",
    established: 2008,
    students: "2500+",
    campus: "15 Acres",
    courses: 12,
    entranceExam: "POLYCET",
    image:
      "https://images.unsplash.com/photo-1622470190232-81df3782484b?auto=format&fit=crop&w=900&q=80",
    about:
      "TRR College offers diploma and engineering education with industry exposure.",
  },

  // ==================== MORE ENGINEERING ====================

  {
    id: 38,
    name: "Aurora's Engineering College",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.2,
    fees: "₹1.10 Lakh / Year",
    averagePackage: "₹5.5 LPA",
    highestPackage: "₹18 LPA",
    placementRate: "84%",
    established: 1998,
    students: "4500+",
    campus: "22 Acres",
    courses: 20,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?auto=format&fit=crop&w=900&q=80",
    about:
      "Aurora's Engineering College is known for engineering education and campus placements.",
  },

  {
    id: 39,
    name: "Matrusri Engineering College",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.3,
    fees: "₹1.15 Lakh / Year",
    averagePackage: "₹6.1 LPA",
    highestPackage: "₹20 LPA",
    placementRate: "87%",
    established: 2011,
    students: "3500+",
    campus: "18 Acres",
    courses: 16,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
    about:
      "Matrusri Engineering College provides engineering programs with placement training and modern labs.",
  },

  {
    id: 40,
    name: "GNITS Hyderabad",
    location: "Hyderabad, Telangana",
    city: "Hyderabad",
    category: "Engineering",
    rating: 4.6,
    fees: "₹1.35 Lakh / Year",
    averagePackage: "₹8.0 LPA",
    highestPackage: "₹36 LPA",
    placementRate: "95%",
    established: 1997,
    students: "4500+",
    campus: "20 Acres",
    courses: 18,
    entranceExam: "TS EAMCET",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=900&q=80",
    about:
      "GNITS is one of Telangana's top women's engineering colleges with excellent placements and academic reputation.",
  },
];

// ======================================================
// COLLEGES COMPONENT
// ======================================================

function Colleges() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");

  // ====================================================
  // FILTER COLLEGES
  // ====================================================

  const filteredColleges = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return colleges.filter((college) => {
      const matchSearch =
        searchTerm === "" ||
        college.name.toLowerCase().includes(searchTerm) ||
        college.location.toLowerCase().includes(searchTerm) ||
        college.category.toLowerCase().includes(searchTerm);

      const matchCategory =
        category === "All" || college.category === category;

      const matchLocation =
        location === "All" || college.city === location;

      return matchSearch && matchCategory && matchLocation;
    });
  }, [search, category, location]);

  // ====================================================
  // CLEAR FILTERS
  // ====================================================

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setLocation("All");
  };

  return (
    <div className="colleges-page">

      <Navbar />

      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section className="college-banner">

        <div className="banner-content">

          <span className="banner-badge">
            🎓 College Finder
          </span>

          <h1>
            Explore Top Colleges in India
          </h1>

          <p>
            Search, compare and discover colleges across
            Engineering, Medical, Management, Science and Diploma.
          </p>

          <div className="search-wrapper">

            <span className="search-icon">
              🔍
            </span>

            <input
              className="search-input"
              type="text"
              placeholder="Search colleges, cities or categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="search-clear"
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}

          </div>

        </div>

      </section>

      {/* ==================================================
          FILTER SECTION
      ================================================== */}

      <section className="filters-section">

        <div className="filter-group">

          <label htmlFor="category">
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >

            <option value="All">
              All Categories
            </option>

            <option value="Engineering">
              Engineering
            </option>

            <option value="Medical">
              Medical
            </option>

            <option value="Management">
              Management
            </option>

            <option value="Science">
              Science
            </option>

            <option value="Diploma">
              Diploma
            </option>

          </select>

        </div>

        <div className="filter-group">

          <label htmlFor="location">
            Location
          </label>

          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >

            <option value="All">
              All Locations
            </option>

            <option value="Hyderabad">
              Hyderabad
            </option>

            <option value="Warangal">
              Warangal
            </option>

            <option value="Sangareddy">
              Sangareddy
            </option>

          </select>

        </div>

        <button
          className="clear-filters-btn"
          type="button"
          onClick={clearFilters}
        >
          Clear Filters
        </button>

      </section>

      {/* ==================================================
          RESULTS HEADER
      ================================================== */}

      <section className="college-count">

        <div>

          <h2>
            {filteredColleges.length}{" "}
            {filteredColleges.length === 1
              ? "College"
              : "Colleges"}{" "}
            Found
          </h2>

          {(search ||
            category !== "All" ||
            location !== "All") && (
            <p>
              Showing results based on your selected filters.
            </p>
          )}

        </div>

      </section>

      {/* ==================================================
          COLLEGE GRID
      ================================================== */}

      <section className="college-grid">

        {filteredColleges.length > 0 ? (

          filteredColleges.map((college) => (

            <article
              className="college-card"
              key={college.id}
            >

              {/* COLLEGE IMAGE */}

              <div className="college-image">

                <img
                  src={college.image}
                  alt={`${college.name} campus`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=900&q=80";
                  }}
                />

                <span className="college-rating">
                  ⭐ {college.rating}
                </span>

              </div>

              {/* COLLEGE CONTENT */}

              <div className="college-content">

                <span className="category">
                  {college.category}
                </span>

                <h3>
                  {college.name}
                </h3>

                <p className="location">
                  📍 {college.location}
                </p>

                <div className="details">

                  <span>
                    💰 {college.fees}
                  </span>

                  <span>
                    📊 {college.placementRate}
                  </span>

                </div>

                <div className="package">

                  <span>
                    Average Package
                  </span>

                  <strong>
                    {college.averagePackage}
                  </strong>

                </div>

                <Link
                  className="view-btn"
                  to={`/colleges/${college.id}`}
                >
                  View Details
                </Link>

              </div>

            </article>

          ))

        ) : (

          <div className="no-results">

            <div className="no-results-icon">
              🔍
            </div>

            <h3>
              No Colleges Found
            </h3>

            <p>
              We couldn't find any colleges matching
              your search or filters.
            </p>

            <button
              type="button"
              className="clear-filters-btn"
              onClick={clearFilters}
            >
              Reset Search
            </button>

          </div>

        )}

      </section>

      <Footer />

    </div>
  );
}

export default Colleges;