<template>
  <main class="mx-auto max-w-[1960px] p-4">
    <div class="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      <!-- 个人介绍 -->
      <section
        class="bg-black after:content relative mb-5 flex h-[629px] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg  px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0"
      >
        <div class="inset-0 flex items-center justify-center">
          <span class="flex max-h-full max-w-full items-center justify-center">
            <UAvatar
              size="3xl"
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              alt="Avatar"
            />
          </span>
          <span
            class="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"
          ></span>
        </div>
        <h1 class="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
          2022 Event Photos
        </h1>
        <p class="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          Our incredible Next.js community got together in San Francisco for our
          first ever in-person conference!
        </p>
        <NuxtLink
          href="/"
          class="cursor-pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
        >
          返回主页
        </NuxtLink>
      </section>

      <NuxtLink
        v-for="item in images"
        :key="item.asset_id"
        :href="'/meitu?photoId=' + item.asset_id"
        shallow
        @click="showImage(item)"
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

  <UModal v-model="isOpen">
    <NuxtImg
      alt="Next.js Conf photo"
      class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
      :src="toImageUrl(image)"
      width="720"
      height="480"
      style="transform: 'translate3d(0, 0, 0)"
      placeholder="blur"
      :format="image.format"
      :blurDataURL="image.blurDataUrl"
      sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
    />
  </UModal>
</template>

<script setup>
import { temp } from "@/data/image";
const images = ref(temp);

const toImageUrl = ({ public_id, format }) => {
  return `https://res.cloudinary.com/dnyepg0vt/image/upload/c_scale,w_720/${public_id}.${format}`;
};

const isOpen = ref(false);

const image = ref({});

const showImage = (item) => {
  image.value = item;
  console.log(item);
  isOpen.value = true;
};
</script>
