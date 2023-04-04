export type product = {
  type:productType,
  title:string,  
  serviceLink?:string,
  marketPlaceLink?:string,
  explain:string,
  menus:subMenuType[]
}

export type productType = "TextMenu" | "ImgMenu"
export type menuType = textLink[] | imgLink

export type subMenuType = subMenuTextType | subMenuImageType;

export type subMenuTextType = {
  title: string,
  menu: textLink[],
}

export type subMenuImageType = {
  title: string,
  menu: imgLink[],
}

export type textLink = {
  type?:textType,
  text:string,
  link:string
}

export type imgLink = {
  imgSrc:string,
  link:string
}

export type textType = "Update"|"New"|"Event"
