import { UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";
const Postlink = (props) => {
  const link = `/${props.postsdir}/${props.id}`;

  return (
    <ListItem marginBottom='0.7em'>
        <Link href={link}>
          <a>
            {props.date} : {props.title}
          </a>
        </Link>
    </ListItem>
  );
};

export default Postlink;
