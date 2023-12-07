import "reflect-metadata"
import { Service, QueryAttribute, Get } from '@bunland/lauri'

@Service({ initRouteWithServiceName: false })
export default class HelloService {
  @Get()
  hello(@QueryAttribute("name") name: string) {
    console.log(name)
    return 'Hello world!'
  }
}