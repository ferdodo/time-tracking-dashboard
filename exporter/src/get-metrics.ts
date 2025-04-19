import { currentLoad, fsSize, mem } from "systeminformation";
import type { MetricsPayload } from "./types/metrics-payload";

export async function getMetrics(): Promise<MetricsPayload> {
	const [cpu, memory, disks] = await Promise.all([
		currentLoad(),
		mem(),
		fsSize(),
	]);

	const disk = disks[0] || { size: 0, available: 0, use: 0 };
	const memoryUsedMB = (memory.active || 0) / 1024 / 1024;
	const memoryTotalMB = (memory.total || 0) / 1024 / 1024;
	const memoryFreeMB = (memory.free || 0) / 1024 / 1024;

	const memoryUsedPercent =
		memoryTotalMB > 0 ? (memoryUsedMB / memoryTotalMB) * 100 : 0;

	return {
		cpuLoadPercent: cpu.currentLoad,
		memoryUsedMB,
		memoryFreeMB,
		memoryUsedPercent,
		diskUsedGB: (disk.size - disk.available) / 1024 / 1024 / 1024,
		diskFreeGB: (disk.available || 0) / 1024 / 1024 / 1024,
	};
}
