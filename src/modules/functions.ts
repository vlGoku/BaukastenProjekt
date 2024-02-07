//create Tags
function createTag(
  parent_node: HTMLElement | null,
  tag_node: string,
  id_name: string | null,
  class_name: string | null,
  content: string | null
) {
  const tag = document.createElement(tag_node);

  if (parent_node != null) {
    parent_node.append(tag);
  } else {
    const startpoint = document.getElementById("content");
    startpoint!.append(tag);
  }

  if (id_name != null) {
    tag.id = id_name;
  }

  if (class_name != null) {
    tag.className = class_name;
  }

  if (content != null) {
    tag.innerHTML = content;
  }

  return tag;
}

//create multiple tags
function createMultiTags(
  parent_node: HTMLElement,
  tag_node: string,
  num: number,
  list: string[],
  menu: boolean,
  links: boolean
) {
  for (let i = 0; i < num; i++) {
    if (menu) {
      createTag(
        parent_node,
        tag_node,
        null,
        list[i],
        '<a href="#' + list[i].replace(/ /g, "-") + '">' + list[i] + "</a>"
      );
    } else if (links) {
      createTag(
        parent_node,
        tag_node,
        null,
        null,
        '<a class="' + list[i] + '" href="#"></a>'
      );
    } else {
      createTag(
        parent_node,
        tag_node,
        null,
        list[i].replace(/ /g, "_"),
        list[i]
      );
    }
  }
}

export { createTag, createMultiTags };
