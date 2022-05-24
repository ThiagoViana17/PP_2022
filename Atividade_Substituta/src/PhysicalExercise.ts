export interface PhysicalExercise{
    nameOfExercise: string;
    getDaysOfWeek(): string[]
}

export class Swimming implements PhysicalExercise{
    nameOfExercise = "Natação";

    public getDaysOfWeek(): string[] {
        return ["segunda", "terça", "quarta"]
    }
}

export class Boxing implements PhysicalExercise{
    nameOfExercise = "Boxe";

    public getDaysOfWeek(): string[] {
        return ["segunda", "quarta", "sexta"]
    }
}

export class Judo implements PhysicalExercise{
    nameOfExercise = "Judô";

    public getDaysOfWeek(): string[] {
        return ["terça", "quarta", "sexta"]
    }
}

export class Bodybuilding implements PhysicalExercise{
    nameOfExercise = "Musculação";

    public getDaysOfWeek(): string[] {
        return ["quarta", "quinta", "sexta"]
    }
}
