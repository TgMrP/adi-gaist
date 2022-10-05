<template>
  <div
    class="container mx-auto max-w-7xl flex-1 px-4 sm:px-6 lg:px-8 py-8 lg:py-16 text-center lg:text-right"
  >
    <div class="">
      <div class="flex flex-col lg:flex-row items-center gap-10">
        <img
          ref="imageRef"
          src="https://static.wixstatic.com/media/3af71d_582d41495bd849c4afb678a4277c759a~mv2.png/v1/crop/x_0,y_2,w_2316,h_2316/fill/w_261,h_261,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_5074_heic.png"
          alt=""
          class="rounded-full shadow-xl border-4 border-black"
        />

        <div ref="target">
          <div class="font-bold text-adi-500">
            <h2 class="text-4xl md:text-5xl font-bold">עדי גייסט</h2>
            <h3 class="text-2xl md:text-3xl">תכנון ועיצוב פנים</h3>
          </div>
          <div class="mt-6 text-base font-semibold text-adi-400 max-w-xl">
            הסטודיו לעיצוב של עדי גייסט מתמחה בשיפוץ דירות, תכנון ועיצוב דירות
            תמ"א, דירות קבלן, עיצוב בתים פרטיים וחללים מסחריים, ונותן מענה
            תכנוני ועיצובי ללקוחות פרטיים ועסקיים, החל משלב התכנון והקונספט,
            וכלה בסטיילינג והלבשת החלל.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const imageRef = ref();
const target = ref();

const motionInstance = useMotion(target, {
  initial: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      mass: 0.5,
      delay: 100,
    },
  },
});

const { variant } = useMotion(imageRef, {
  initial: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 20,
      delay: 500,
      onComplete: () => {
        variant.value = "levitate";
      },
    },
  },
  levitate: {
    y: 15,
    transition: {
      duration: 2000,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
    },
  },
});
</script>

<!-- <style lang="scss" scoped></style> -->
