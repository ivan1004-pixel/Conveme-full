import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EstadosModule } from './estados/estados.module';
import { MunicipiosModule } from './municipios/municipios.module';
import { EscuelasModule } from './escuelas/escuelas.module';
import { PaisesModule } from './paises/paises.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { VendedoresModule } from './vendedores/vendedores.module';
import { ClientesModule } from './clientes/clientes.module';
import { RolesModule } from './roles/roles.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EventosModule } from './eventos/eventos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TamanosModule } from './tamanos/tamanos.module';
import { ProductosModule } from './productos/productos.module';
import { InsumosMateriaPrimaModule } from './insumos-materia-prima/insumos-materia-prima.module';
import { ComprasInsumosModule } from './compras-insumos/compras-insumos.module';
import { DetComprasInsumosModule } from './det-compras-insumos/det-compras-insumos.module';
import { PromocionesModule } from './promociones/promociones.module';
import { CategoriasGastoModule } from './categorias-gasto/categorias-gasto.module';
import { AuditoriaSistemaModule } from './auditoria-sistema/auditoria-sistema.module';
import { InventarioNegocioModule } from './inventario-negocio/inventario-negocio.module';
import { MovimientosInventarioModule } from './movimientos-inventario/movimientos-inventario.module';
import { OrdenesProduccionModule } from './ordenes-produccion/ordenes-produccion.module';
import { AsignacionesVendedorModule } from './asignaciones-vendedor/asignaciones-vendedor.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ConsumoInsumosProduccionModule } from './consumo-insumos-produccion/consumo-insumos-produccion.module';
import { DetAsignacionesModule } from './det-asignaciones/det-asignaciones.module';
import { DetPedidosModule } from './det-pedidos/det-pedidos.module';
import { VentasModule } from './ventas/ventas.module';
import { DetallesVentasModule } from './detalles-ventas/detalles-ventas.module';
import { CortesVendedorModule } from './cortes-vendedor/cortes-vendedor.module';
import { DetCortesInventarioModule } from './det-cortes-inventario/det-cortes-inventario.module';
import { CuentasBancariasVendedorModule } from './cuentas-bancarias-vendedor/cuentas-bancarias-vendedor.module';
import { SaldoVendedoresModule } from './saldo-vendedores/saldo-vendedores.module';
import { PagosVendedoresModule } from './pagos-vendedores/pagos-vendedores.module';
import { GastosOperativosModule } from './gastos-operativos/gastos-operativos.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,

    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root', // Cambiar esto por usuario de MySQL
      password: '12345',     // Cambiar esto por contraseña de MySQL
      database: 'conveme', // El nombre de base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,

    }),

    EstadosModule,
    MunicipiosModule,
    EscuelasModule,
    PaisesModule,
    EmpleadosModule,
    VendedoresModule,
    ClientesModule,
    RolesModule,
    UsuariosModule,
    EventosModule,
    CategoriasModule,
    TamanosModule,
    ProductosModule,
    InsumosMateriaPrimaModule,
    ComprasInsumosModule,
    DetComprasInsumosModule,
    PromocionesModule,
    CategoriasGastoModule,
    AuditoriaSistemaModule,
    InventarioNegocioModule,
    MovimientosInventarioModule,
    OrdenesProduccionModule,
    AsignacionesVendedorModule,
    PedidosModule,
    ConsumoInsumosProduccionModule,
    DetAsignacionesModule,
    DetPedidosModule,
    VentasModule,
    DetallesVentasModule,
    CortesVendedorModule,
    DetCortesInventarioModule,
    CuentasBancariasVendedorModule,
    SaldoVendedoresModule,
    PagosVendedoresModule,
    GastosOperativosModule,
  ],
})
export class AppModule {}
