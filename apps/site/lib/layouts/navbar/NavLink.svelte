<script lang="ts">
  import clsx from 'clsx';

  import { isNull } from '$lib/utils/unit';

  export let title: string;
  export let slug: string;
  export let match: RegExp | null = null;
</script>

<li class="992:mt-0 mt-4 first:mt-0">
  <a
    class="text-soft hover:font-medium font-base hover:underline hover:text-brand"
    href={slug}
    target={isNull(match) ? '_blank' : null}
    data-prefetch
  >
    {title}
  </a>
</li>
