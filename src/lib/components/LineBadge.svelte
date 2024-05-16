<script lang="ts">
    import { Badge } from './ui/badge';
    let { line }: { line: string } = $props();
</script>

<Badge variant="secondary" class="rounded px-1.5">{line}</Badge>