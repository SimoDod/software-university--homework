function CC(worker) {

    if (worker.dizziness) {
        let totalToHydrate = (worker.weight * 0.1) * worker.experience;
        worker.levelOfHydrated = totalToHydrate;
        worker.dizziness = false;
    }
    return worker;
}
console.log(CC({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));
