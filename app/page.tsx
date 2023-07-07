import { CenteredLayout, DarkBackground } from "../common/Container.styled";
import { MaruSpinner } from "../common/Spinner";

export default function Page() {
    if (true) {
        return <CenteredLayout><MaruSpinner/></CenteredLayout>
    }
    return <h1>Hello, Next.js!</h1>;
}