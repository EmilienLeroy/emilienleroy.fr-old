import { Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({
  name: 'view',
  stateFactory: true,
  namespaced: true,
})
export default class ViewModule extends VuexModule {
  private home: boolean = false;

  @Mutation
  public setHome(home: boolean) {
    this.home = home;
  }
}

