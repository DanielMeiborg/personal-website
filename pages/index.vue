<template>
    <div>
        <h2 class="text-4xl font-bold">Projects</h2>
        <div class="grid grid-cols-1 gap-6 xl:grid-cols-2 p-3">
            <NuxtLink :to="project.url" target="_blank" v-for="project in projects" :key="project.name"
                class="card xl:w-96 bg-base-100 shadow-xl transition ease-in-out xl:hover:scale-110">
                <figure v-if="project.image">
                    <NuxtImg fit="inside" :src="project.image" :alt="project.name" />
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
    </div>
</template>

<script setup lang="ts">
interface Project {
    name: string;
    description: string;
    url: string;
    image?: string;
    skills: string[];
}
const projects: Project[] = [
    {
        name: "Cryptocurrencies as national currencies",
        description: "Cryptocurrencies as national currencies - opportunities and challenges for monetary policy",
        url: "https://github.com/DanielMeiborg/cryptocurrencies-as-national-currencies",
        skills: ["Macroeconomics", "Mathematics"]
    }
];
</script>