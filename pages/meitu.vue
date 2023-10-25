<template>
  <main class="mx-auto max-w-[1960px] p-4">
    <div class="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      <div
        class="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0"
      >
        <div
          class="absolute inset-0 flex items-center justify-center opacity-20"
        >
          <span class="flex max-h-full max-w-full items-center justify-center">
            <icons-bridge />
          </span>
          <span
            class="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"
          ></span>
        </div>
        <icons-logo />
        <h1 class="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
          2022 Event Photos
        </h1>
        <p class="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          Our incredible Next.js community got together in San Francisco for our
          first ever in-person conference!
        </p>
        <a
          class="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
          href="https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary&project-name=nextjs-image-gallery&repository-name=with-cloudinary&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,CLOUDINARY_FOLDER&envDescription=API%20Keys%20from%20Cloudinary%20needed%20to%20run%20this%20application"
          target="_blank"
          rel="noreferrer"
        >
          Clone and Deploy
        </a>
      </div>
      <NuxtLink
        v-for="item in images"
        :key="item.asset_id"
        :href="'/meitu?photoId=' + item.asset_id"
        :as="'/p/' + item.asset_id"
        shallow
        class="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
      >
        <NuxtImg
          alt="Next.js Conf photo"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
          :src="toImageUrl(item)"
          width="720"
          height="480"
          style="transform: 'translate3d(0, 0, 0)"
          placeholder="blur"
          :format="item.format"
          :blurDataURL="item.blurDataUrl"
          sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
        />
      </NuxtLink>
    </div>
  </main>
  <footer class="p-6 text-center text-white/80 sm:p-12">
    Thank you to{' '}
    <a
      href="https://edelsonphotography.com/"
      target="_blank"
      class="font-semibold hover:text-white"
      rel="noreferrer"
    >
      Josh Edelson
    </a>
    ,{' '}
    <a
      href="https://www.newrevmedia.com/"
      target="_blank"
      class="font-semibold hover:text-white"
      rel="noreferrer"
    >
      Jenny Morgan
    </a>
    , and{' '}
    <a
      href="https://www.garysextonphotography.com/"
      target="_blank"
      class="font-semibold hover:text-white"
      rel="noreferrer"
    >
      Gary Sexton </a
    >{' '} for the pictures.
  </footer>
</template>

<script setup>
import { temp } from "@/data/image";
const images = ref(temp);

const toImageUrl = ({ public_id, format }) => {
  return `https://res.cloudinary.com/dnyepg0vt/image/upload/c_scale,w_720/${public_id}.${format}`;
};
</script>
