import { Status } from "@prisma/client";
import { faker } from "@faker-js/faker";

export function fakeGenre() {
    return {
        name: faker.person.fullName(),
    };
}

export function fakeGenreComplete() {
    return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
    };
}

export function fakeBook() {
    return {
        title: faker.lorem.words(5),
        summary: faker.lorem.words(5),
        ISBN: faker.lorem.words(5),
    };
}

export function fakeBookComplete() {
    return {
        id: faker.string.uuid(),
        title: faker.lorem.words(5),
        summary: faker.lorem.words(5),
        ISBN: faker.lorem.words(5),
        authorId: faker.string.uuid(),
    };
}

export function fakeBookInstance() {
    return {
        imprint: faker.lorem.words(5),
        status: faker.helpers.arrayElement([
            Status.Available,
            Status.Maintenance,
            Status.Loaned,
            Status.Reserved,
        ] as const),
        dueBack: faker.date.anytime(),
    };
}

export function fakeBookInstanceComplete() {
    return {
        id: faker.string.uuid(),
        imprint: faker.lorem.words(5),
        status: faker.helpers.arrayElement([
            Status.Available,
            Status.Maintenance,
            Status.Loaned,
            Status.Reserved,
        ] as const),
        dueBack: faker.date.anytime(),
        bookId: faker.string.uuid(),
    };
}

export function fakeAuthor() {
    return {
        firstName: faker.person.firstName(),
        familyName: faker.person.lastName(),
        dateOfBirth: faker.date.anytime(),
        dateOfDeath: faker.date.anytime(),
    };
}

export function fakeAuthorComplete() {
    return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        familyName: faker.person.lastName(),
        dateOfBirth: faker.date.anytime(),
        dateOfDeath: faker.date.anytime(),
    };
}
