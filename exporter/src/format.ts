import type { MetricsPayload } from "./types/metrics-payload";

export function format(metrics: MetricsPayload): string {
	return [
		"# HELP ttd_cpu_current_load_percent Charge CPU instantanée en pourcentage",
		"# TYPE ttd_cpu_current_load_percent gauge",
		`ttd_cpu_current_load_percent ${metrics.cpuLoadPercent.toFixed(2)}`,
		"# HELP ttd_memory_used_mb Mémoire utilisée en Mo",
		"# TYPE ttd_memory_used_mb gauge",
		`ttd_memory_used_mb ${metrics.memoryUsedMB.toFixed(1)}`,
		"# HELP ttd_memory_free_mb Mémoire libre en Mo",
		"# TYPE ttd_memory_free_mb gauge",
		`ttd_memory_free_mb ${metrics.memoryFreeMB.toFixed(1)}`,
		"# HELP ttd_memory_used_percent Pourcentage de mémoire utilisée",
		"# TYPE ttd_memory_used_percent gauge",
		`ttd_memory_used_percent ${metrics.memoryUsedPercent.toFixed(1)}`,
		"# HELP ttd_disk_used_gb Disque utilisé en Go",
		"# TYPE ttd_disk_used_gb gauge",
		`ttd_disk_used_gb ${metrics.diskUsedGB.toFixed(2)}`,
		"# HELP ttd_disk_free_gb Disque libre en Go",
		"# TYPE ttd_disk_free_gb gauge",
		`ttd_disk_free_gb ${metrics.diskFreeGB.toFixed(2)}`,
	].join("\n");
}
