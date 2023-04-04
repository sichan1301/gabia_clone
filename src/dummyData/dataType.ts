export type product = {
  type:productType,
  title:string,  
  serviceLink?:string,
  marketPlaceLink?:string,
  explain:string,
  menus:{
    title:string,
    menu:menuType
  }[]
}

export type productType = "TextMenu" | "ImgMenu"
export type menuType = textLink[] | imgLink

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
