//J'ai besoin de savoir si je suis authentifié
/**
 * Si viens de me connecter,je dois me souvenir que je suis connectée pendant la navigation
 *
 * Si je reload la page j'ai besoin de savoir si je suis connectée
 *
 *  Si oui : bah parfait
 *  Si non : faut demander au back et retourner l'info ? Voir si j'ai un cookie de session ?
 *
 *
 */

import { UserAuthData } from "../../models/userAuthData.model";
import { HTTPPostClient } from "../httpClients/post.http";

export const authenticationTool = {
  isLogged: false,
  checkIsLogged: () => {
    console.log("check");
  },
  login: async function (userData: UserAuthData) {
    const response = await HTTPPostClient("login", JSON.stringify(userData));

    this.isLogged = response.status === 200;
  },
  logout: () => {},
};
