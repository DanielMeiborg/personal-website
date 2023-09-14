<template>
    <div>
        <h2 class="text-4xl font-bold text-center mt-10">Projects</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 p-3">
            <NuxtLink :to="project.url" target="_blank" v-for="project in projects" :key="project.name"
                class="card xl:w-96 bg-base-100 shadow-xl transition ease-in-out xl:hover:scale-110">
                <figure v-if="project.image">
                    <NuxtImg :src="project.image" :alt="project.name" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {{ project.name }}
                    </h2>
                    <p>{{ project.description }}</p>
                    <div class="card-actions justify-end">
                        <div v-for="skill in project.skills" class="badge badge-secondary">{{ skill }}</div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <h2 class="text-4xl font-bold text-center mt-10">Contact</h2>
        <div class="join flex justify-center mt-5">
            <NuxtLink to="https://github.com/DanielMeiborg" target="_blank" class="btn btn-square">
                <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                    <path
                        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z">
                    </path>
                </svg>
            </NuxtLink>
            <NuxtLink to="https://www.linkedin.com/in/daniel-meiborg-87613528b" target="_blank" class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 512 512" fill="currentColor">
                    <path
                        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z">
                    </path>
                </svg>
            </NuxtLink>
            <NuxtLink to="mailto:mail@danielmeiborg.com" target="_blank" class="btn btn-square">
                <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                    </path>
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Project {
    name: string;
    description: string;
    url: string;
    image?: string;
    skills?: string[];
}
const projects: Project[] = [
    {
        name: "The applicability of the second law of thermodynamics to economic systems",
        description: "A research paper about a conjunction of physics, computer science and economy. I worked on this during SIA - Schüler-Ingenieur-Akademie.",
        url: "https://github.com/DanielMeiborg/entropy-in-economic-modeling",
        skills: ["Macroeconomics", "Mathematics"]
    },
    {
        name: "Entromatica - Open Source Library in Rust",
        description: "Entromatica is an open source library written in Rust, which can be used to model Markov processes (a special category of statistical processes). It is designed to be both flexible and efficient, which is achieved through various layers of abstraction.",
        url: "https://github.com/DanielMeiborg/entromatica",
        skills: ["Rust", "Open-Source", "Mathematics"]
    },
    {
        name: "Cloud Classification from Space - CloudicAI",
        description: "Astro Pi is a competition conducted by the Raspberry Pi Foundation and the ESA where teams can submit code which will potentially run on the ISS to conduct experiments. This was the case for our project CloudicAI which was aimed to analyze and classify clouds from space using conventional cameras.",
        url: "https://github.com/cloudic-ai/cloudic-ai/blob/main/mission-report.pdf",
        skills: ["Data Science", "Python", "Machine Learning"]
    },
    {
        name: "Cryptocurrencies as national currencies - opportunities and challenges for monetary policy",
        description: "I wrote this essay during the course of my Schüler-Ingenieur-Akademie (SIA).",
        url: "https://github.com/DanielMeiborg/cryptocurrencies-as-national-currencies/blob/main/main.pdf",
        skills: ["Macroeconomics"]
    },

];

useSeoMeta({
    title: "Daniel Meiborg",
    description: "Personal Website",
})

useHead({
    htmlAttrs: {
        lang: "en"
    },
})
</script>