import {useCourse} from "#imports";

export default () => {
    const {chapters} = useCourse();
    return chapters[0].lessons[0];
}